# Leonardo Dariva — protótipo independente

Esta é uma primeira versão funcional e independente do portfólio, criada porque nenhum checkout ou repositório do projeto “portfólio de edição de vídeos” estava disponível neste workspace.

## Visualização local

Na pasta do projeto, rode um servidor HTTP estático, por exemplo:

```bash
python3 -m http.server 3000 --directory dist
```

Depois abra `http://localhost:3000`.

## Integração no projeto real

1. Copie o conteúdo de `dist/` para a pasta pública do portfólio.
2. Substitua os placeholders de `media-card` pelos vídeos e artes reais, preservando `aspect-ratio` 9:16, 16:9 e 1:1.
3. Os botões de contato e o briefing abrem o aplicativo de e-mail do visitante. Caso queira envio direto no site, conecte `#contact-form` a um serviço de formulário.
4. Mantenha `assets/pagoda-hero.png` como background do hero ou troque por um asset próprio com direitos de uso.

Os textos e cards demonstrativos estão marcados como demo/placeholder e não afirmam clientes, métricas ou credenciais.
