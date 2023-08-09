import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, check: string) {
    if (check === 'all') {
      return value;
    } else if (check === 'jewelery') {
      value = value.filter((value: any) => value.category === 'jewelery');
        return value;
    } else if (check === 'men') {
      value = value.filter((value: any) => value.category === "men's clothing");
        return value;
    } else if (check === 'electronics') {
      value = value.filter((value: any) => value.category === 'electronics');
        return value;
    } else if (check === 'Women') {
      value = value.filter(
        (value: any) => value.category === "women's clothing"   
      );
       return value;
    }
  
  }
}
