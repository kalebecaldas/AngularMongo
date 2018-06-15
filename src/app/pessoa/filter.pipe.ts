import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pessoas: any[], searchText: string): any[] {
    if(!pessoas) return [];
    if(!searchText) return pessoas;

  searchText = searchText.toLowerCase();

    return pessoas.filter( element => {
      return element.nome.toLowerCase().includes(searchText);
    });
   }

}
