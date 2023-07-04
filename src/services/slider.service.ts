import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { API_URL } from 'src/environment';
import { DUMMY_SLIDES } from 'src/dummy/dummy-slides';

export interface Slide {
  imageUrl: string;
  link: string;
  openInNewTab: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  constructor(private http: HttpClient) {}

  get getSlides$(): Observable<Slide[] | null> {
    return this.http.get<Slide[]>(`${API_URL}/slides`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('HTTP error:', error);
        return of<Slide[] | null>(DUMMY_SLIDES as Slide[]);
      })
    );
  }
}
