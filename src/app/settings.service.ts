import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  @Output() update = new EventEmitter();

  background = 'dark';
  color = 'yellow';

  constructor() { }

  get theme() {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    } else {
      return this.background + '-' + this.color;
    }
  }

  change_theme(background, color) {
    this.background = background;
    this.color = color;
    localStorage.setItem('theme', background + '-' + color);

    this.update.emit();
  }
}
