import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  searchResults!: any;
  transform(value: any, check: string) {
    if (check) {
      this.searchResults = value.filter((item: { title: string; }) =>
      {
        return item.title.toLowerCase().includes(check.toLowerCase());
      }
        
      );
      console.log(this.searchResults);
      return this.searchResults;
    } else {
      return value;
    }
  }
}
