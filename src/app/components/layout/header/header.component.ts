import { Component, HostListener, Inject, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Subject } from "rxjs";
import { throttleTime } from "rxjs/operators";
import { LanguageComponent } from "./components/language/language.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { RouterModule } from "@angular/router";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { matClose, matMenu } from "@ng-icons/material-icons/baseline";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    LanguageComponent,
    RouterModule,
    UserInfoComponent,
    NgIconComponent,
  ],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  providers: [provideIcons({ matMenu, matClose })],
})
export class HeaderComponent {
  private resizeSubject = new Subject<Event>();
  navIsOpen: boolean = false;

  constructor() {
    this.resizeSubject.pipe(throttleTime(500)).subscribe((event: Event) => {
      this.onWindowResize(event);
    });
  }

  desktopMode!: boolean;

  ngAfterViewInit() {
    this.desktopMode = window?.innerWidth > 990;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.resizeSubject.next(event);
  }

  onWindowResize(event: Event) {
    this.desktopMode = window?.innerWidth > 990;
  }

  toggleNav() {
    this.navIsOpen = !this.navIsOpen;

    if (this.navIsOpen) {
      document.documentElement.classList.add("disable-scroll");
      document.body.classList.add("disable-scroll");
    } else {
      document.documentElement.classList.remove("disable-scroll");
      document.body.classList.remove("disable-scroll");
    }
  }
}
