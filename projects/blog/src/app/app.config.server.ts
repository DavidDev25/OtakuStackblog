
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRouting, provideServerRoutesConfig } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';
import { appConfig } from './app.config';

const serverAppConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes) // SSR-Routen registrieren
  ]
};

export const serverConfig = mergeApplicationConfig(appConfig, serverAppConfig);
