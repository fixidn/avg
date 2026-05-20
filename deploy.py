"""
Deploy script untuk Avangard Next.js
Usage: python deploy.py
"""

import paramiko
import os
import sys
from pathlib import Path

# === CONFIG ===
SERVER_IP   = '192.168.18.102'
SERVER_USER = 'root'
SERVER_PASS = 'Avangard!'
REMOTE_DIR  = '/opt/apps/avangard'
SERVICE     = 'avangard-next.service'

# File & folder yang diupload (relatif terhadap project root)
UPLOAD_ITEMS = [
    '.next',
    'public',
    'next.config.ts',
    'package.json',
    'package-lock.json',
]

# Subdirektori .next yang di-skip (tidak dibutuhkan untuk production)
SKIP_NEXT_SUBDIRS = {'dev', 'cache'}

# ===============

LOCAL_ROOT = Path(__file__).parent

def upload_dir(sftp, local_path: Path, remote_path: str, _top_level: bool = False):
    try:
        sftp.mkdir(remote_path)
    except OSError:
        pass

    for item in local_path.iterdir():
        # Skip direktori .next/dev dan .next/cache
        if _top_level and item.name in SKIP_NEXT_SUBDIRS:
            continue
        r = f"{remote_path}/{item.name}"
        if item.is_dir():
            upload_dir(sftp, item, r)
        else:
            try:
                sftp.put(str(item), r)
            except (FileNotFoundError, OSError):
                pass  # skip symlink/inaccessible files on Windows


def run_cmd(ssh, cmd: str) -> tuple[str, str]:
    _, stdout, stderr = ssh.exec_command(cmd)
    return stdout.read().decode('utf-8', errors='replace'), stderr.read().decode('utf-8', errors='replace')


def main():
    print(f"Connecting to {SERVER_IP}...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(SERVER_IP, username=SERVER_USER, password=SERVER_PASS, timeout=15)
    sftp = ssh.open_sftp()
    print("Connected.\n")

    for item in UPLOAD_ITEMS:
        local = LOCAL_ROOT / item
        remote = f"{REMOTE_DIR}/{item}"

        if not local.exists():
            print(f"  [SKIP] {item} tidak ditemukan")
            continue

        if local.is_dir():
            print(f"  Uploading {item}/...")
            # Hapus dulu di server agar tidak ada file lama yang tersisa
            run_cmd(ssh, f"rm -rf {remote}")
            is_next = item == '.next'
            upload_dir(sftp, local, remote, _top_level=is_next)
        else:
            print(f"  Uploading {item}...")
            sftp.put(str(local), remote)

    print("\nRestarting service...")
    out, err = run_cmd(ssh, f"systemctl restart {SERVICE} && sleep 2 && systemctl is-active {SERVICE}")
    status = out.strip()
    print(f"  Service status: {status}")

    if status != 'active':
        print("\n[ERROR] Service tidak active setelah restart. Log terakhir:")
        out, _ = run_cmd(ssh, f"journalctl -u {SERVICE} -n 20 --no-pager")
        print(out)
        sftp.close()
        ssh.close()
        sys.exit(1)

    sftp.close()
    ssh.close()
    print("\nDeploy selesai.")


if __name__ == '__main__':
    main()
