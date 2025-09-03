'use client';

import dynamic from 'next/dynamic';

// Dynamic import with loading fallback
const A11yAltTemplate = dynamic(() => import('@/templates/a11yalt/A11yAltTemplate'), {
  loading: () => (
    <div className="min-h-screen bg-[#2D1B69] flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-xl">Carregando template de acessibilidade...</p>
      </div>
    </div>
  ),
  ssr: false, // Disable SSR for this heavy template
});

export default function DynamicTemplateLoader() {
  return <A11yAltTemplate />;
}
