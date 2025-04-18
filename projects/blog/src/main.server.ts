// src/main.server.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { serverConfig } from './app/app.config.server';
import { AppComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, serverConfig);

export default bootstrap;
