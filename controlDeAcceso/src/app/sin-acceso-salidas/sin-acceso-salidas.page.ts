import { Component, OnInit } from '@angular/core';
import { Salidas } from '../pages/models/salidas.model';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sin-acceso-salidas',
  templateUrl: './sin-acceso-salidas.page.html',
  styleUrls: ['./sin-acceso-salidas.page.scss'],
})
export class SinAccesoSalidasPage implements OnInit {

  post = {} as Salidas;
  id: any;
  
  constructor(private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private navCtrl: NavController,
              private firestore: AngularFirestore
              ) { }

  ngOnInit() {} 


  async createPostSalidas(post: Salidas){
    if(this.formValidationSalidas()){
      let loader = this.loadingCtrl.create({
        message: "Registrando Cuenta..."
      });
      (await loader).present();

      try {
await this.firestore.collection("sinaccesos").add(post);
      } catch (e) {
        this.showToast(e);
      }
      //cerrar loading
      (await loader).dismiss();
        
      //redirigir a home

      // this.navCtrl.navigateRoot("/configuracion-config-condomino-dos");


    }
  }






//----------------------------------
  
 formValidationSalidas(){
   if(!this.post.nombre){
     this.showToast("Porfavor Ingresa nombre");
     return false;
   }      
   if(!this.post.domicilio){
     this.showToast("Porfavor Ingresa domicilio");
     return false;
   }
   if(!this.post.tipoacceso){
     this.showToast("Porfavor Ingresa el tipo de acceso");
    return false;
 }
 if(!this.post.placas){
   this.showToast("Porfavor Ingresa las placas");
   return false;
 }
 if(!this.post.obcesrvaciones){
  this.showToast("Porfavor Ingresa las obcervaciones");
  return false;
}
if(!this.post.modoingreso){
  this.showToast("Porfavor Ingresa el modo de ingreso");
  return false;
}

if(!this.post.horaEntrada){
  this.showToast("Porfavor Ingresa el modo de ingreso");
  return false;
}
if(!this.post.horasalida){
  this.showToast("Porfavor Ingresa el modo de ingreso");
  return false;
}
      return true;
    }

    

 
    //-------------------------------


    
    showToast(message: string){
      this.toastCtrl.create({
        message: message,
        duration: 3000
      })
      .then(toastData => toastData.present());
    
  }
}

