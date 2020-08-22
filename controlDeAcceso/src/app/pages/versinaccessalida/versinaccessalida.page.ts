import { Component} from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-versinaccessalida',
  templateUrl: './versinaccessalida.page.html',
  styleUrls: ['./versinaccessalida.page.scss'],
})
export class VersinaccessalidaPage {

  posts: any;
  constructor(  private toastCtrl: ToastController,
                private loadingCtrl: LoadingController,
                private firestore: AngularFirestore
             ) {}

  ionViewWillEnter(){
    this.getPosts();
  } 
//-----------agregar
  async getPosts(){
    let loader = await this.loadingCtrl.create({
      message: "please wait..."
    });
    loader.present();

    try {
      this.firestore
      .collection("sinaccesos")
      .snapshotChanges()
      .subscribe(data => {
        this.posts = data.map(e => {
          return {
            id: e.payload.doc.id,
            domicilio: e.payload.doc.data()["domicilio"],
            horaEntrada: e.payload.doc.data()["horaEntrada"],
            modoingreso: e.payload.doc.data()["modoingreso"],
            nombre: e.payload.doc.data()["nombre"],
            obcesrvaciones: e.payload.doc.data()["obcesrvaciones"],
            placas: e.payload.doc.data()["placas"],
            horasalida: e.payload.doc.data()["horasalida"],
            tipoacceso: e.payload.doc.data()["tipoacceso"]
          };
        });
        // desaparece loader
       loader.dismiss();
      });

      
      
    } catch (e) {
      this.showToast(e);
    }
  }
//-----------borrar

async deletePost(id: string) {
  //loading
  let loader = this.loadingCtrl.create({
    message: "deleting...."
  });
  (await loader).present();

  await this.firestore.doc("sinaccesos/" + id).delete();

  (await loader).dismiss();
}
//-----------loading

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }

}
