const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');
const config = require('./config');

const dev = !config.isProduction;
const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 * 24
});

function renderAndCache(req, res, pagePath, queryParams) {
  if (dev) {
    return app.render(req, res, pagePath, queryParams);
  }
  const key = req.url;
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return; // eslint-disable-line
  }

  return app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      console.log(`CACHE MISS: ${key}`);
      ssrCache.set(key, html);
      res.send(html);
    })
    .catch(err => app.renderError(err, req, res, pagePath, queryParams));
}

app.prepare().then(() => {
  const server = express();
  server.get('/', (req, res) => renderAndCache(req, res, '/registration'));
  server.get('*', (req, res) => handle(req, res));
  server.listen(config.port, () => console.log(`YWC15 Registration Front-End is started at port ${config.port}`));
});
