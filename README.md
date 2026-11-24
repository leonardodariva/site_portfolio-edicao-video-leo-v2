# Leonardo Dariva — portfólio V2

Conceito editorial com direção japonesa sombria, tipografia condensada, preto e vermelho. Esta V2 tem [repositório próprio](https://github.com/leonardodariva/site_portfolio-edicao-video-leo-v2); a versão anterior permanece separada.

## Visualização local

Na pasta do projeto, rode um servidor HTTP estático, por exemplo:

```bash
python3 -m http.server 3000 --directory dist
```

Depois abra `http://localhost:3000`.

## Conteúdo e integração

1. Publique `dist/` como site estático.
2. O primeiro Reel usa um vídeo demonstrativo já presente nos arquivos do portfólio anterior. Os demais cards são composições de demonstração. Substitua-os por trabalhos confirmados, preservando `aspect-ratio` 9:16, 16:9 e 1:1.
3. O formulário de contato usa Netlify Forms. Os botões de e-mail continuam disponíveis como alternativa.
4. Mantenha `assets/pagoda-hero.webp` como fundo fixo do site ou troque por um asset próprio com direitos de uso.

Os cards demonstrativos estão identificados como demo e não afirmam clientes, métricas ou credenciais.

## Publicação no Netlify

Importe o repositório como um novo projeto. O arquivo netlify.toml indica a pasta dist como diretório de publicação. O comando de build usa o endereço do projeto para gerar os links absolutos das capas de compartilhamento. No painel do novo projeto, habilite a detecção em Forms e faça um deploy. Confirme que o formulário contact aparece no painel e configure a notificação por e-mail para um membro ativo da equipe. Faça um envio de teste no endereço Netlify e confira a notificação e o endereço de resposta. O servidor estático local não processa os envios.
