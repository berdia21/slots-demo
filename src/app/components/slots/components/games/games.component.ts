import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider } from 'src/services/providers.service';
import { Game } from 'src/services/games.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matPlayArrow } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  providers: [provideIcons({ matPlayArrow })],
})
export class GamesComponent {
  @Input() activeProvider!: Provider;
  @Input() games!: Game[] | null;
  @Input() searchKeyword!: string;
}
