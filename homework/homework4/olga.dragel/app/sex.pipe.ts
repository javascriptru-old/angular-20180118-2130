import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 1) {
      return 'Man';
    }

    if (value === 0) {
      return 'Woman';
    }

    throw new Error('Pipe sex supports only 1 and 0 values');
  }

}
