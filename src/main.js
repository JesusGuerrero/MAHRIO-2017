import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode }         from '@angular/core';
import { MainModule }             from './app/main.module';

if (WPCONFIG.ENV === 'PROD') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MainModule);

