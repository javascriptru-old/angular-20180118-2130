import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: boolean): string {
    const res = (value === true) ? 'Male' : 'Female';
    console.log(res);
    return res;
  }
}
