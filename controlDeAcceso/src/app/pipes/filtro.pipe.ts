import { Pipe, PipeTransform } from '@angular/core';
import { Salidas } from '../pages/models/salidas.model';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(salidas: any[] , texto: string): Salidas[] {
   
    console.log(salidas);
    if ( texto.length === 0 ){ return salidas;}
    texto = texto.toLocaleLowerCase();

       return salidas.filter( item => {
      return item.domicilio.toLocaleLowerCase().includes(texto);
      // item.nombre.toLocaleLowerCase().includes(texto)
      // || item.clave.toLocaleLowerCase().includes(texto)
       //item.domicilio.toLocaleLowerCase().includes(texto);
    
    });
  }

}
