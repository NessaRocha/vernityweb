# Performance Testing Guide

Este guia fornece instruções detalhadas para medir a performance da aplicação usando o Lighthouse em um ambiente de produção local.

## 🚀 Script de Performance

### Executar Build de Produção
```bash
npm run perf:prod
```

Este comando irá:
1. Executar `next build` para criar uma build otimizada de produção
2. Iniciar o servidor em `http://localhost:4000`

## 📊 Medição com Lighthouse

### Pré-requisitos
- [Google Chrome](https://www.google.com/chrome/) (versão mais recente)
- [Node.js](https://nodejs.org/) (versão 18+)
- Aplicação rodando em `http://localhost:4000`

### Passos para Medição

#### 1. Preparar Ambiente
```bash
# Instalar dependências
npm install

# Executar build de produção
npm run perf:prod
```

#### 2. Abrir Chrome em Modo Anônimo
- Pressione `Ctrl+Shift+N` (Windows/Linux) ou `Cmd+Shift+N` (Mac)
- Ou vá em Menu → Nova janela anônima

#### 3. Desabilitar Extensões
- Digite `chrome://extensions/` na barra de endereços
- Desabilite todas as extensões temporariamente
- Ou use o modo anônimo que já desabilita extensões por padrão

#### 4. Abrir DevTools
- Pressione `F12` ou `Ctrl+Shift+I` (Windows/Linux) ou `Cmd+Option+I` (Mac)
- Vá para a aba **Lighthouse**

#### 5. Configurar Lighthouse
- ✅ **Categories**: Selecione todas as categorias
  - Performance
  - Accessibility
  - Best Practices
  - SEO
  - Progressive Web App
- ✅ **Device**: Desktop (ou Mobile para testes responsivos)
- ✅ **Mode**: Navigation (para página completa)

#### 6. Executar Auditoria
- Clique em **"Generate report"**
- Aguarde a conclusão da auditoria
- O relatório será gerado automaticamente

## 🔍 Checklist de Ambiente

### ✅ Sistema Operacional
- [ ] Windows 10/11, macOS 12+, ou Linux (Ubuntu 20.04+)
- [ ] Pelo menos 8GB RAM disponível
- [ ] 2GB de espaço livre em disco

### ✅ Navegador
- [ ] Google Chrome versão 120+ instalado
- [ ] Modo anônimo ativado
- [ ] Extensões desabilitadas
- [ ] Cache limpo (Ctrl+Shift+Delete)

### ✅ Rede
- [ ] Conexão estável à internet
- [ ] Sem proxy ou VPN que possa interferir
- [ ] Firewall permitindo conexões locais

### ✅ Aplicação
- [ ] Dependências instaladas (`npm install`)
- [ ] Build de produção executada (`npm run perf:prod`)
- [ ] Servidor rodando em `http://localhost:4000`
- [ ] Página carregando corretamente

### ✅ DevTools
- [ ] DevTools abertos (F12)
- [ ] Aba Lighthouse selecionada
- [ ] Todas as categorias marcadas
- [ ] Modo Desktop/Mobile selecionado

## 📈 Interpretando Resultados

### Performance Score
- **90-100**: Excelente
- **50-89**: Bom
- **0-49**: Precisa de melhorias

### Métricas Principais
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTFB (Time to First Byte)**: < 600ms

### Accessibility Score
- **90-100**: Excelente acessibilidade
- **50-89**: Boa acessibilidade
- **0-49**: Precisa de melhorias na acessibilidade

## 🛠️ Solução de Problemas

### Erro: "Page load timeout"
- Verifique se a aplicação está rodando em `localhost:4000`
- Aguarde o carregamento completo da página
- Tente recarregar a página

### Erro: "Lighthouse failed to load the page"
- Verifique se não há bloqueadores de anúncios ativos
- Confirme que a página carrega normalmente
- Tente em uma janela anônima diferente

### Performance Muito Baixa
- Verifique se está testando a build de produção (`npm run perf:prod`)
- Confirme que não há outras aplicações consumindo recursos
- Feche outras abas e aplicações desnecessárias

## 📝 Relatórios

### Salvar Relatórios
- Após a auditoria, clique em **"Download report"**
- Salve como HTML para análise detalhada
- Use **"Export"** para dados em JSON

### Comparar Resultados
- Execute auditorias antes e depois de mudanças
- Mantenha histórico de métricas
- Compare com benchmarks da indústria

## 🔄 Testes Regulares

### Frequência Recomendada
- **Desenvolvimento**: A cada mudança significativa
- **Staging**: Antes de cada deploy
- **Produção**: Semanalmente ou mensalmente

### Cenários de Teste
- Página inicial
- Páginas internas
- Formulários
- Navegação entre seções
- Diferentes dispositivos (Desktop/Mobile)

---

**Nota**: Este guia garante medições consistentes e confiáveis para otimização contínua da performance da aplicação.
