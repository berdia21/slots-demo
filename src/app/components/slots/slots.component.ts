import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { GamesComponent } from './components/games/games.component';
import { Provider } from 'src/services/providers.service';
import { TranslateModule } from '@ngx-translate/core';
import { Game, GamesService } from 'src/services/games.service';

@Component({
  selector: 'app-slots',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    ProvidersComponent,
    GamesComponent,
    TranslateModule,
  ],
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss'],
})
export class SlotsComponent {
  constructor(private gamesService: GamesService) {}
  activeProvider!: Provider;
  filteredGames!: Game[];
  gamesToDisplay!: Game[];
  searchKeyword!: string;

  handleSearch(keyword: string) {
    if (keyword.length > 0) {
      this.searchKeyword = keyword;
      const gamesCopy = [...this.filteredGames];
      this.gamesToDisplay = gamesCopy.filter((game) =>
        game.name.toLowerCase().includes(keyword)
      );
    } else {
      this.gamesToDisplay = this.filteredGames;
    }
  }

  setActiveProvider(activeProvider: Provider) {
    if (!activeProvider) return;
    this.activeProvider = activeProvider;
    this.getGamesByProvider(activeProvider.itemId);
  }

  getGamesByProvider(providerId: string) {
    this.gamesService.getGamesByProvider(providerId).subscribe((games) => {
      this.gamesToDisplay = games as Game[];
      this.filteredGames = games as Game[];
    });
  }
}
