import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: any, [order]) {
    value.sort((a:any, b:any) => {
      if(order === '+') {
        if (a.value < b.value) {
          return -1;
        } else if (a.value > b.value) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a.value > b.value) {
          return -1;
        } else if (a.value < b.value) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    return Array.from(value);
  }
}
