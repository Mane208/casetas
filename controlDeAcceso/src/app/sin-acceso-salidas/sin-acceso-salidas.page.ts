import { Component, OnInit } from '@angular/core';
import { Salidas } from '../pages/models/salidas.model';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sin-acceso-salidas',
  templateUrl: './sin-acceso-salidas.page.html',
  styleUrls: ['./sin-acceso-salidas.page.scss'],
})
export class SinAccesoSalidasPage implements OnInit {

  post = {} as Salidas;
  id: any;

  constructor(private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController

  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }


  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string) {
    let loader = this.loadingCtrl.create({
      message: "please wait..."
    });
    (await loader).present();

    this.firestore.doc("sinaccesos/" + id)
      .valueChanges()
      .subscribe(data => {
        this.post.domicilio = data["domicilio"];
        this.post.horaEntrada = data["horaEntrada"];
        this.post.modoingreso = data["modoingreso"];
        this.post.nombre = data["nombre"];
        this.post.obcesrvaciones = data["obcesrvaciones"];
        this.post.placas = data["placas"];
        this.post.tipoacceso = data["tipoacceso"];
        this.post.horasalida = data["horasalida"];
      });
    (await loader).dismiss();
  }

  async updatePost(post: Salidas) {
    if (this.formValidation()) {
      let loader = this.loadingCtrl.create({
        message: "please wait..."
      });
      (await loader).present();

      try {
        await this.firestore.doc("sinaccesos/" + this.id).update(post);
      } catch (e) {
        this.showToast(e);
      }
      //cerrar loading
      (await loader).dismiss();

      //redirigir a home

      this.navCtrl.navigateRoot("/versinaccessalida");
    }
  }

  //----------------------------------

  formValidation() {
    if (!this.post.nombre) {
      this.showToast("Porfavor Ingresa nombre");
      return false;
    }
    if (!this.post.domicilio) {
      this.showToast("Porfavor Ingresa domicilio");
      return false;
    }
    if (!this.post.tipoacceso) {
      this.showToast("Porfavor Ingresa el tipo de acceso");
      return false;
    }
    if (!this.post.placas) {
      this.showToast("Porfavor Ingresa las placas");
      return false;
    }
    if (!this.post.obcesrvaciones) {
      this.showToast("Porfavor Ingresa las obcervaciones");
      return false;
    }
    if (!this.post.modoingreso) {
      this.showToast("Porfavor Ingresa el modo de ingreso");
      return false;
    }

    if (!this.post.horaEntrada) {
      this.showToast("Porfavor Ingresa el modo de ingreso");
      return false;
    }
    if (!this.post.horasalida) {
      this.showToast("Porfavor Ingresa el modo de ingreso");
      return false;
    }
    return true;
  }




  //-------------------------------



  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
      .then(toastData => toastData.present());

  }
}

