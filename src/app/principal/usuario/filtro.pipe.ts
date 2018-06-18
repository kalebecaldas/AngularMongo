import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipeUsuario implements PipeTransform {

  transform(usuarios: any[], searchText: string): any[] {
    if(!usuarios) return [];
    if(!searchText) return usuarios;

  searchText = searchText.toLowerCase();

    return usuarios.filter( element => {
      return (
        element.nome.toLowerCase().includes(searchText) ||
        element.cpf.includes(searchText) ||
        element.usuario.includes(searchText)
      );
    });
   }

}
