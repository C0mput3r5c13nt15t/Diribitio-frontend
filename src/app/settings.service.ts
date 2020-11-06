import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  @Output() update = new EventEmitter();

  background = 'light';
  color = 'blue';

  constructor() { }

  /**
   * @description Gives back the current theme
   * @returns The current theme from the local storage or a pre-set standard
   */
  get theme() {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    } else {
      return this.background + '-' + this.color;
    }
  }

  /**
   * @description Changes the current theme and saves it to the local storage
   * @param background Contains the background color (light or dark)
   * @param color Contains the color of buttons, titles, etc (blue, pink, green or yellow)
   */
  change_theme(background, color) {
    this.background = background;
    this.color = color;
    localStorage.setItem('theme', background + '-' + color);

    this.update.emit();
  }
}
