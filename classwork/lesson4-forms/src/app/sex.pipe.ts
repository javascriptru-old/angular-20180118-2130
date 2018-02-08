import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {

    console.log(args);

    if (value === 1) {
      return 'М';
    }

    if (value === 0) {
      return 'Ж';
    }

    throw new Error('Pipe sex suports only 1 and 0 values');
  }

}
