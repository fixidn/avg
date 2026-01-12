import Studio from './Studio'; 

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [
    { index: [] } 
  ];
}

export const metadata = {
  title: 'Avangard Studio',
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <Studio />;
}