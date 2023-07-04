import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { API_URL } from 'src/environment';
import { DUMMY_PROVIDERS } from 'src/dummy/dummy-providers';

export interface Provider {
  itemId: string;
  itemLabel: string;
  icon: string;
  itemRouteName: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  constructor(private http: HttpClient) {}

  get getProviders$(): Observable<Provider[] | null> {
    // ${API_URL}
    return this.http.get<Provider[] | null>(`/providers`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP error:', error);
        return of<Provider[] | null>(DUMMY_PROVIDERS as Provider[]);
      })
    );
  }
}
