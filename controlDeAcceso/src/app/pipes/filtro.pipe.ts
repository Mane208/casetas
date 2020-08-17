import { Pipe, PipeTransform } from '@angular/core';
import { Salidas } from '../pages/models/salidas.model';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(salidas: any[] , texto: string): Salidas[] {
    // return null;
    console.log(salidas);
    if( texto === '' ){ return salidas;}
    texto = texto.toLocaleLowerCase();
    // console.log(texto) + " lo del filtro";
    salidas.filter( item => {
      return item.nombre.toLocaleLowerCase().includes(texto);
    
    });
  }

}
