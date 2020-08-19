import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.page.html',
  styleUrls: ['./messenger.page.scss'],
})
export class MessengerPage {

  users: any;
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
      .collection("users")
      .snapshotChanges()
      .subscribe(data => {
        this.users = data.map(e => {
          return {
            id: e.payload.doc.id,
            users: e.payload.doc.data()["users"]
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

  await this.firestore.doc("users/" + id).delete();

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
