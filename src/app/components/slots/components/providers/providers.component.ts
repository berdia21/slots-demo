import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider, ProviderService } from 'src/services/providers.service';
import { Observable, Subject, take, throttleTime } from 'rxjs';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  matExpandLess,
  matExpandMore,
} from '@ng-icons/material-icons/baseline';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [CommonModule, NgIconComponent, TranslateModule],
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss'],
  providers: [provideIcons({ matExpandLess, matExpandMore })],
})
export class ProvidersComponent {
  constructor(private providerService: ProviderService) {
    this.resizeSubject.pipe(throttleTime(500)).subscribe((event: Event) => {
      this.onWindowResize(event);
    });
  }
  @Output() activeProvider = new EventEmitter<Provider>();

  private resizeSubject = new Subject<Event>();

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.resizeSubject.next(event);
  }

  onWindowResize(event: Event) {
    window.innerWidth < 991
      ? (this.limitProviders = this.providersLength - 1)
      : (this.limitProviders = 13);
  }
  providersLength!: number;
  limitProviders!: number;
  selectedProvider!: Provider;
  providersData: Provider[] = [];

  ngOnInit() {
    this.providerService.getProviders$.pipe(take(1)).subscribe((providers) => {
      if (providers) {
        this.providersData = providers;
        this.providersLength = providers.length;
        this.activeProvider.emit(providers[0]);
        this.limitProviders =
          window.innerWidth < 991 ? this.providersLength - 1 : 13;

        this.selectedProvider = providers[0];
      }
    });
  }

  toggleAllProviders() {
    if (this.limitProviders === 13) {
      this.limitProviders = this.providersLength - 1;
    } else {
      this.limitProviders = 13;
    }
  }

  selectProvider(provider: Provider) {
    if (provider === this.selectedProvider) return;
    this.selectedProvider = provider;
    this.activeProvider.emit(provider);
  }
}
