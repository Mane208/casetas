import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contacto-condominos',
  templateUrl: './contacto-condominos.page.html',
  styleUrls: ['./contacto-condominos.page.scss'],
})
export class ContactoCondominosPage  {
  vista : any;
  id : any;
  constructor( private loadingCtrl: LoadingController,
                private firestore: AngularFirestore,
                private ToastCtrl: ToastController) { }

ionViewWillEnter(){
  this.getPost();
}

async getPost(){
  let loader = await this.loadingCtrl.create({
    message: "Espera un momento... "
  });

  loader.present();
  try {
    this.firestore
    .collection ("condomino")
    .snapshotChanges ()
    .subscribe (data => {
      this.vista = data.map(e => {
      return {
        id: e.payload.doc.id,
        nombre: e.payload.doc.data()["nombre"]
      };
    });

    loader.dismiss();
    });
   } catch (e) {
    this.showToast(e);

  }
}
 
showToast (message:string){
  this.ToastCtrl.create({
    message: message, 
    duration: 3000
  })
  .then( ToastData => ToastData.present());
}
}
