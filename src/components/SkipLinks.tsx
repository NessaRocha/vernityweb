export default function SkipLinks() {
  return (
    <div className="sr-only focus:not-sr-only">
      <a
        href="#main-content"
        className="absolute top-0 left-0 z-[100] px-4 py-2 bg-red-500 text-white rounded-br-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-all"
      >
        Pular para o conteúdo principal
      </a>
      <a
        href="#navigation"
        className="absolute top-0 left-32 z-[100] px-4 py-2 bg-red-500 text-white rounded-br-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-all"
      >
        Pular para a navegação
      </a>
    </div>
  );
}
