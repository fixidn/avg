import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

const ServiceCard = ({ title, description, icon, href = "/contact" }: ServiceCardProps) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 group">
      <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <Link href={href} className="inline-flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
        Konsultasi Layanan <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;