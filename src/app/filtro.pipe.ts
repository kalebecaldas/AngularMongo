import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  /**
   * Passar um vetor de objetos e uma string para busca, a função então varre o vetor em busca da string e retorna
   * um subvetor com os elementos que contém a string. Para uso com o filtro.
   */
  transform(vetor: any[], searchText: string): any[] {
    if(!vetor) return [];
    if(!searchText) return vetor;

    searchText = searchText.toLowerCase();

    return vetor.filter(element => {
      //Para cada chave em um objeto
      for (let chave in element) {
        //Verifica se aquela chave pertence ao proprio objeto e não ao protótipo (herança, etc)
        if (element.hasOwnProperty(chave)) {
          //Se o objeto for um vetor, iterar sobre ele
          if (Array.isArray(element[chave])) {
            let found = false;

            //Verifica cada posição e retorna true se alguma delas contiver a string
            element[chave].forEach(campo => {
              if (campo['valor'].toString().toLowerCase().includes(searchText)) {
                found = true;
              }
            });

            if (found) {
              return true;
            }
          }

          //Senão apenas checar seu conteúdo
          else {
            //Se uma das chaves contiver a string
            if (element[chave].toString().toLowerCase().includes(searchText)) {
              return true;
            }
          }
        }
      }

      //If no string was found return false
      return false;
    });
   }

}
