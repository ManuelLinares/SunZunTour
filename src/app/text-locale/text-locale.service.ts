import { Injectable } from '@angular/core';
import { messages } from './locale';

@Injectable()
export class TextLocaleService {

  constructor() {
    this.lang = window.navigator.language.split('-')[0];
    if ((this.lang !== 'es') && (this.lang !== 'en')) {
      this.lang = 'en';
    }
  }

  lang: string;

  public getLang(): string {
    return this.lang;
  }

  public getText(key: string, lang: string): string {
    const language = messages[lang];
    if (language !== undefined) {
      return language[key];
    }
    return messages.en[key];
  }

}
