/// <reference types="@angular/localize" />

// import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// import { AppModule } from "./app/app.module";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

import { appConfig } from "./app/app.config";

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig);
