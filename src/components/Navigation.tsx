import Link from "next/link";
import Image from 'next/image';
import { NavbarProps } from '@/views/homepage/types';

export default function Navigation({ data }: { data: NavbarProps }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-red-500/20 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between" style={{ height: '110px' }}>
          <Link href="#home" className="flex items-center focus-visible">
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={150}
              height={50}
              className="h-20 w-auto object-contain"
            />
          </Link>
          
          <div className="flex items-center space-x-8">
            {data.navItems.slice(0, -1).map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-white hover:text-red-500 transition-colors font-medium focus-visible"
                aria-label={`Navegar para ${item.label}`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href={data.navItems[data.navItems.length - 1].href}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium focus-visible"
              aria-label="Entrar em contato via WhatsApp"
            >
              {data.navItems[data.navItems.length - 1].label}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
