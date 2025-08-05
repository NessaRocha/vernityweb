# 📸 Instruções para Imagens de Preview

## 🎯 Como adicionar as imagens de preview dos sites

### 📁 Localização das imagens:
Coloque as imagens na pasta: `public/images/`

### 🖼️ Nomes dos arquivos:
1. **Domma Electra**: `dommaelectrasite.webp`
2. **Cris Psicólogo**: `crispsicologosite.webp`

### 📐 Especificações recomendadas:
- **Formato**: WebP (recomendado) ou JPG
- **Dimensões**: 800x600 pixels (proporção 4:3)
- **Qualidade**: 85-90% (excelente qualidade)
- **Tamanho**: Máximo 300KB por imagem

### 🛠️ Como capturar as screenshots:

#### **Opção 1: Ferramentas online**
- **Screenshotapi.com**: Cole a URL e capture
- **Browserling.com**: Visualize e capture
- **Screenshot.guru**: Captura automática

#### **Opção 2: Extensões do navegador**
- **GoFullPage** (Chrome/Firefox)
- **Nimbus Screenshot**
- **Lightshot**

#### **Opção 3: Ferramentas nativas**
- **Windows**: Snipping Tool ou Print Screen
- **Mac**: Cmd + Shift + 4
- **Linux**: PrtScn ou ferramentas nativas

### 🎨 Dicas para captura:
1. **Abra o site** em uma janela do navegador
2. **Ajuste o zoom** para 100%
3. **Capture a área** principal do site (header + conteúdo)
4. **Salve como JPG** com boa qualidade
5. **Redimensione** se necessário para 800x600px

### 📂 Estrutura final:
```
public/
└── images/
    ├── dommaelectrasite.webp
    ├── crispsicologosite.webp
    ├── banner.webp
    └── logo.svg
```

### ✅ Após adicionar as imagens:
- As previews aparecerão automaticamente
- Se uma imagem não carregar, mostrará o nome do projeto
- Hover revela o botão "Ver site completo"

### 🔧 Fallback:
Se as imagens não estiverem disponíveis, o sistema mostrará o nome do projeto como placeholder. 