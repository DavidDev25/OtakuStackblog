import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import bootstrap from './main.server';

const app = express();
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

// Angular Universal Engine für SSR
const commonEngine = new CommonEngine();

// Express konfigurieren
app.set('view engine', 'html');
app.set('views', browserDistFolder);

// SSR für alle Routen aktivieren
app.get('*', (req, res, next) => {
  commonEngine
    .render({
      bootstrap,          // Bootstrapping der Server-App
      documentFilePath: indexHtml,
      url: req.url,       // Angeforderte URL
      publicPath: browserDistFolder,
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl } // Basis-Pfad für Routing
      ],
    })
    .then((html) => res.send(html)) // Gerendertes HTML zurückschicken
    .catch((err) => next(err));
});
