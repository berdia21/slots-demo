import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { FooterComponent } from "./components/layout/footer/footer.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { SliderComponent } from "./components/slider/slider.component";
import { SlotsComponent } from "./components/slots/slots.component";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SlotsComponent,
    SliderComponent,
  ],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(["en", "ka", "ru"]);
    translate.setDefaultLang("en");
  }
}
