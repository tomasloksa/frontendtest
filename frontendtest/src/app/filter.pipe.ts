import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter( it => {
      console.log(it.name.toLowerCase().includes(searchText));
      return it.name.toLowerCase().includes(searchText);
    });
   }

}
