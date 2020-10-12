import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {LoadingController} from '@ionic/angular';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login.service';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-btn-inicio',
  templateUrl: './btn-inicio.page.html',
  styleUrls: ['./btn-inicio.page.scss'],
})
export class BtnInicioPage implements OnInit {
  permisos: string;
  constructor(public menu: MenuController,
     public loading: LoadingController,
     public router:Router) {
    
   }
   
  

  

  cerrarSesion(){
    this.router.navigate(['/login'])
    environment.user = {
      nombre: '',
      email: '',
      password: '',
      domicilio: '',
      telefono: '',
      tipo: ''
    }
  }
  ngOnInit() {
    this.permisos = environment.tipo;
    if(this.permisos === 'Condomino'){
      console.log(true);
    }else{
      console.log(false);
    }
    console.log(typeof this.permisos);
  }
  
}