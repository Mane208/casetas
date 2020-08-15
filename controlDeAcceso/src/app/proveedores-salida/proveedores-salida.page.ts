import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import {Registro} from '../pages/models/proveedores.model'

@Component({
  selector: 'app-proveedores-salida',
  templateUrl: './proveedores-salida.page.html',
  styleUrls: ['./proveedores-salida.page.scss'],
})
export class ProveedoresSalidaPage {
  post = {} as Registro;
 
  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
    ) { }

async createPostProveedores(post: Registro){
if(this.formValidationProveedores()){
let loader = this.loadingCtrl.create({
message: "Registrando Cuenta..."
});
(await loader).present();

try {
await this.firestore.collection("sinaccesosproveedores").add(post);
} catch (e) {
this.showToast(e);
}
//cerrar loading
(await loader).dismiss();

//redirigir a home

this.navCtrl.navigateRoot("/proveedores-salida");


}
}
formValidationProveedores(){
  if(!this.post.nombre){
    this.showToast("Porfavor Ingresa nombre");
    return false;
    }      
    if(!this.post.direccion){
    this.showToast("Porfavor Ingresa direccion");
    return false;
    }
    if(!this.post.telefono){
    this.showToast("Porfavor Ingresa N° tarjeta");
    return false;
    }
    
    
return true;
}

showToast(message: string){
this.toastCtrl.create({
message: message,
duration: 3000
})
.then(toastData => toastData.present());

}
}