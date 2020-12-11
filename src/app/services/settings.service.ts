import { Injectable, Output, EventEmitter } from '@angular/core';

/**
 * This service handles the color settings of the application
 */
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  /**
   * The update event is emitted after every major successful request
   */
  @Output() update = new EventEmitter();

  /**
   * The color of the background (light or dark)
   */
  background = 'light';
  /**
   * The color of the buttons, titles, etc. (blue, green, yellow or pink)
   */
  color = 'blue';

  /**
   * @ignore
   */
  constructor() { }

  /**
   * Gives back the current theme
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
   * Changes the current theme and saves it to the local storage
   * @param background Contains the background color (light or dark)
   * @param color Contains the color of buttons, titles, etc (blue, pink, green or yellow)
   */
  change_theme(background: string, color: string) {
    this.background = background;
    this.color = color;
    localStorage.setItem('theme', background + '-' + color);

    this.update.emit();
  }
}
