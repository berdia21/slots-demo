import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { API_URL } from 'src/environment';
import { DUMMY_GAMES } from 'src/dummy/dummy-games';

export interface Game {
  id: string;
  vendorServiceId: number;
  vendorServiceName: string;
  name: string;
  imageUrl: string;
  largeImageUrl: string | null;
  thumbnail: string;
  launchTypeId: number;
  gameId: string;
  supportsJackpot: boolean;
  jackpotId: string | null;
  minAmount: number | null;
  maxAmount: number | null;
  providerIcon: string;
  supportsDemo: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  private shuffleArray<T>(array: Game[]): Game[] | null {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getGamesByProvider(providerId: string): Observable<Game[] | null> {
    // ${API_URL}
    return this.http.get<Game[] | null>(`/game/group/${providerId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP error:', error);
        return of<Game[] | null>(DUMMY_GAMES as Game[]);
      }),
      map((games: Game[] | null) => this.shuffleArray(games as Game[]))
    );
  }
}
