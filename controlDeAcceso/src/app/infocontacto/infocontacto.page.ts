import { Component, OnInit } from '@angular/core';
import { vista } from '../pages/models/contacto.model';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-infocontacto',
  templateUrl: './infocontacto.page.html',
  styleUrls: ['./infocontacto.page.scss'],
})
export class InfocontactoPage  {
  post = {} as vista;
  id: any;
  
    constructor( private actRoute: ActivatedRoute,
                  private loadingCtrl: LoadingController,
                  private firestore: AngularFirestore) { 
      this.id = this.actRoute.snapshot.paramMap.get("id");
    }
  
  
  
  
    ngOnInit() {
    this.getPostById(this.id);
    }
  
    async getPostById(id: string){
      let loader = this.loadingCtrl.create({
        message: "Espera un momento...."
      });
  
      (await loader ) .present();
      this.firestore.doc("condomino/" +id) 
      .valueChanges ()
      .subscribe (data => {
        this.post.nombre = data["nombre"];
        this.post.direccion = data["direccion"];
        this.post.telefono = data["telefono"];
        this.post.tipo = data["tipo"];

       
        // this.post.status = data["status"];
        
      });
  
      (await loader) .dismiss();
  
    }
  
    
  
    segmentChanged(event: any) {
      console.log('Segment changed', event);
    }
  
  }
  