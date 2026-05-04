# Demétrio Films — Site MVP

## Estrutura do projeto

```
demetrio-films/
├── index.html
├── css/style.css
├── js/main.js
├── videos/          ← coloque seus vídeos .mp4 aqui
└── README.md
```

## Vídeos a adicionar na pasta /videos/

| Arquivo                  | Link Instagram                              |
|--------------------------|---------------------------------------------|
| imob-1.mp4               | instagram.com/p/DVwlPekgJ1X/                |
| imob-2.mp4               | instagram.com/p/DPXLrUpgPC1/                |
| imob-3.mp4               | instagram.com/p/DP4w6nzkd5E/                |
| institucional-1.mp4      | instagram.com/p/DPuaUZuEdpE/                |

Thumbnails opcionais (mesmo nome + -thumb.jpg): imob-1-thumb.jpg, etc.

## Como baixar os vídeos do Instagram
Use sites como: snapinsta.app, sssave.net, ou igdownloader.com

## Como subir no Vercel

### Opção 1 — Drag & Drop (mais rápido)
1. Acesse vercel.com → New Project
2. Arraste a pasta demetrio-films

### Opção 2 — GitHub
1. Suba para um repo no GitHub
2. Importe no vercel.com

### Opção 3 — CLI
npm i -g vercel && vercel

## Comportamento dos vídeos
- Desktop: hover → toca automático (mudo)
- Mobile: scroll → toca quando 60% visível
- Som: botão aparece no card enquanto toca
- Sem .mp4: mostra link direto pro Instagram
