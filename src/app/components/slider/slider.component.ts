import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { Slide, SliderService } from 'src/services/slider.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  matChevronLeft,
  matChevronRight,
} from '@ng-icons/material-icons/baseline';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [provideIcons({ matChevronRight, matChevronLeft })],
})
export class SliderComponent {
  constructor(private sliderService: SliderService) {}

  slides$: Observable<Slide[] | null> = this.sliderService.getSlides$;

  ngAfterViewInit() {
    // register swiper
    register();
  }
}
