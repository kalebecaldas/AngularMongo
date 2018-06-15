import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(pessoas: any[], searchText: string): any[] {
    if(!pessoas) return [];
    if(!searchText) return pessoas;

  searchText = searchText.toLowerCase();

    return pessoas.filter( element => {
      return (
        element.nome.toLowerCase().includes(searchText) ||
        element.cpf.includes(searchText) ||
        element.rg.includes(searchText) ||
        element.endereco.toLowerCase().includes(searchText) ||
        element.mae.toLowerCase().includes(searchText)
      );
    });
   }

}
