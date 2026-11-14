# FALAI — MVP migrado para React

Esta versão inicia a migração do protótipo original (HTML, CSS e JavaScript) para React com Vite. O foco desta entrega é a identidade visual e a organização da interface, preservando as áreas e fluxos existentes.

## Tecnologias
- React 18
- Vite 6
- CSS responsivo

## Executar localmente

Requisitos: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço local informado pelo Vite (normalmente http://localhost:5173).

## Gerar versão de publicação

```bash
npm run build
```

O Vite gera a pasta `dist/`, que é a pasta a publicar no Netlify.

## Publicação no Netlify
- Build command: `npm run build`
- Publish directory: `dist`

Se o projeto estiver conectado ao GitHub, envie os arquivos para o repositório e configure esses dois campos no Netlify.

## Estrutura

```text
src/
  components/  Componentes reutilizáveis
  data/        Dados demonstrativos
  App.jsx      Páginas e fluxos do MVP
  main.jsx     Inicialização do React
  styles.css   Identidade visual e responsividade
```

## Funcionalidades preservadas nesta versão
- Visão geral e ocorrências recentes
- Registro de ocorrência com categoria, prioridade, descrição, foto opcional e localização
- Tela de confirmação com protocolo gerado
- Consulta de protocolo e linha do tempo demonstrativa
- Mapa esquemático com filtros por categoria, status e busca
- Painel de gestão com indicadores e tabela
- Perfil do cidadão e preferências demonstrativas

## Limitações atuais
Os dados permanecem em memória no navegador e são demonstrativos. Eles não são persistidos após recarregar a página e ainda não existe API, autenticação real, armazenamento de imagens ou mapa geográfico. Essas integrações serão etapas posteriores. O mapa desta versão é visual/esquemático, não representa coordenadas reais.
