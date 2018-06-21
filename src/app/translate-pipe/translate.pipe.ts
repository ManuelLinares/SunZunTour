import { Pipe, PipeTransform } from '@angular/core';
import { TextLocaleService } from '../text-locale/text-locale.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private textLoc: TextLocaleService) {}

  lang: string = window.navigator.language.split('-')[0];
  transform(value: string): string {
    return this.textLoc.getText(value, this.lang);
    
  }

}
