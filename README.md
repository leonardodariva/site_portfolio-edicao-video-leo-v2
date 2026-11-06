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
3. Os botões de contato e o briefing abrem o aplicativo de e-mail do visitante. Caso queira envio direto no site, conecte `#contact-form` a um serviço de formulário.
4. Mantenha `assets/pagoda-hero.png` como background do hero ou troque por um asset próprio com direitos de uso.

Os cards demonstrativos estão identificados como demo e não afirmam clientes, métricas ou credenciais.
