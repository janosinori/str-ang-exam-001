import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], phrase: string, key: string = 'name'): any {
    if(!Array.isArray(value) || !phrase || !key){
      return value;
    }
    phrase = phrase.toLowerCase();
    return value.filter(item => String(item[key]).toLowerCase().includes(phrase));
  }
}