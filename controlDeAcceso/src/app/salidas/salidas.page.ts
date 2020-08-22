import { Component } from '@angular/core';
import { LoadingController, ToastController  } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Salidas } from '../pages/models/salidas.model';
import { FiltroPipe} from '../pipes/filtro.pipe';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.page.html',
  styleUrls: ['./salidas.page.scss'],
})
export class SalidasPage  {
  textobuscar = "";

  salidas : any;
    constructor( private loadingCtrl: LoadingController,
                  private firestore: AngularFirestore,
                  private ToastCtrl: ToastController) { }
  
   
  ionViewWillEnter(){
    this.getPost();
  }
  
  buscardireccion( event){
    const texto = event.target.value;
    this.textobuscar = texto;
    console.log(this.salidas);
  }
  
  async getPost(){
    let loader = await this.loadingCtrl.create({
      message: "Espera un momento... "
    });
  
    loader.present();
    try {
      this.firestore
      .collection ("sinaccesos")
      .snapshotChanges ()
      .subscribe (data => {
        this.salidas = data.map(e => {
        return {
          id: e.payload.doc.id,
          nombre: e.payload.doc.data()["nombre"],
          domicilio: e.payload.doc.data()["domicilio"]
          
        };
      });
  
      loader.dismiss();
      });
     } catch (e) {
      this.showToast(e);
  
    }
  }
  
  async deletePost(id: string) {
    //loading
    let loader = this.loadingCtrl.create({
      message: "deleting...."
    });
    (await loader).present();
  
    await this.firestore.doc("proveedor/" + id).delete();
  
    (await loader).dismiss();
  }
   
  showToast (message:string){
    this.ToastCtrl.create({
      message: message, 
      duration: 3000
    })
    .then( ToastData => ToastData.present());
  }
  }