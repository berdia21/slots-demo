import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  matVisibilityOff,
  matVisibility,
  matCheckCircle,
} from '@ng-icons/material-icons/baseline';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, NgIconComponent, TranslateModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers: [
    provideIcons({ matVisibilityOff, matVisibility, matCheckCircle }),
  ],
})
export class UserInfoComponent {
  constructor(public translate: TranslateService) {}
  depositIsVisible: boolean = true;
}
