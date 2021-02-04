import { Injectable } from '@angular/core';
import app from 'src/config/app.config.json';
import backend from 'src/config/backend.config.json';
import conditions from 'src/config/conditions.json';
import content from 'src/config/content.json';
import data_protection from 'src/config/data-protection.json';
import error from 'src/config/error.json';
import help from 'src/config/help.json';
import home from 'src/config/home.json';
import imprint from 'src/config/imprint.json';
import ui from 'src/config/ui.config.json';

/**
 * This service handles all configuration files
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  /**
   * All possible definite articles for the projectNoun
   */
  private definiteArticlesCapital: { [gender: string]: string } = {
    m: 'Der',
    f: 'Die',
    n: 'Das',
  };
  /**
   * All possible indefinite articles for the projectNoun
   */
  private indefiniteArticlesCapital: { [gender: string]: string } = {
    m: 'Ein',
    f: 'Eine',
    n: 'Ein',
  };

  /**
   * @ignore
   */
  constructor() {}

  /**
   * Returns the content of the page with the given name
   * @param pageName Contains the name of the page
   */
  get_content(pageName: string) {
    // tslint:disable-next-line: triple-equals
    return content.contents.filter(text => text.page == pageName)[0].content;
  }

  /**
   * Returns the content with the given index of the page with the given name
   * @param pageName Contains the name of the page
   */
  get_content_by_index(pageName: string, index = 0) {
    // tslint:disable-next-line: triple-equals
    return content.contents.filter(text => text.page == pageName)[0].contents[index].content;
  }

  /**
   * Returns the error message of the error with the given name
   * @param pageName Contains the name of the page
   */
  get_error(errorName: string) {
    // tslint:disable-next-line: triple-equals
    return error.errors.filter(descr => descr.error == errorName)[0].descr;
  }

  /**
   * Returns the status text for the given status of the given page
   * @param pageName Contains the name of the page
   */
  get_mail_status_descr(pageName: string, status: number) {
    // tslint:disable-next-line: triple-equals
    const descriptions = content.contents.filter(text => text.page == pageName)[0].descriptions;
    // tslint:disable-next-line: triple-equals
    return descriptions.filter(text => text.code == status)[0];
  }

  /**
   * Returns the app.config.json
   * @returns Contains the json
   */
  get app_config() {
    return app;
  }

  /**
   * Returns the backend.config.json
   * @returns Contains the json
   */
  get backend_config() {
    return backend;
  }

  /**
   * Returns the conditions.config.json
   * @returns Contains the json
   */
  get conditions() {
    return conditions;
  }

  /**
   * Returns the data-protection.config.json
   * @returns Contains the json
   */
  get data_protection() {
    return data_protection;
  }

  /**
   * Returns the help.config.json
   * @returns Contains the json
   */
  get help() {
    return help;
  }

  /**
   * Returns the home.config.json
   * @returns Contains the json
   */
  get home() {
    return home;
  }

  /**
   * Returns the imprint.config.json
   * @returns Contains the json
   */
  get imprint() {
    return imprint;
  }

  /**
   * Returns the ui.config.json
   * @returns Contains the json
   */
  get ui() {
    return ui;
  }

  /**
   * Returns the definite article for projectNoun
   * @returns Contains the definite article
   */
  get definite_article() {
    const gender = app.noun_gender;
    return this.definiteArticlesCapital[gender];
  }

  /**
   * Returns the indefinite article for projectNoun
   * @returns Contains the indefinite article
   */
  get indefinite_article() {
    const gender = app.noun_gender;
    return this.indefiniteArticlesCapital[gender];
  }
}
