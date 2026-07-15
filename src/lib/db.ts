import mysql from 'mysql2/promise';

// Connection pool ke MySQL Hostinger. Di produksi (app + DB satu server)
// MYSQL_HOST = localhost. Untuk dev lokal butuh remote connection di-whitelist.
let pool: mysql.Pool | null = null;

export function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT) || 3306,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
      charset: 'utf8mb4',
    });
  }
  return pool;
}

// Pastikan tabel `leads` ada. Dijalankan sekali per proses (idempotent).
let tableReady: Promise<void> | null = null;

export function ensureLeadsTable(): Promise<void> {
  if (!tableReady) {
    tableReady = getPool()
      .query(
        `CREATE TABLE IF NOT EXISTS leads (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(120) NOT NULL,
          email VARCHAR(254) NOT NULL,
          phone VARCHAR(30) NULL,
          service VARCHAR(120) NOT NULL,
          message TEXT NOT NULL,
          ip VARCHAR(64) NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          INDEX idx_created_at (created_at),
          INDEX idx_email (email)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`
      )
      .then(() => undefined)
      .catch((err) => {
        // reset agar percobaan berikutnya bisa mencoba lagi
        tableReady = null;
        throw err;
      });
  }
  return tableReady;
}

export type LeadInput = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  ip?: string;
};

export async function insertLead(lead: LeadInput): Promise<number> {
  await ensureLeadsTable();
  const [result] = await getPool().execute(
    `INSERT INTO leads (name, email, phone, service, message, ip)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      lead.name,
      lead.email,
      lead.phone || null,
      lead.service,
      lead.message,
      lead.ip || null,
    ]
  );
  return (result as mysql.ResultSetHeader).insertId;
}
