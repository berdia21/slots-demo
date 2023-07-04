import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matSearch } from '@ng-icons/material-icons/baseline';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIconComponent, TranslateModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [provideIcons({ matSearch })],
})
export class SearchComponent {
  searchKeyword: string = '';

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  emitSearchKeyword(): void {
    this.searchEvent.emit(this.searchKeyword.toLowerCase().trim());
  }
}
