import { Component } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-mensajes-medicos',
  templateUrl: './mensajes-medicos.page.html',
  styleUrls: ['./mensajes-medicos.page.scss'],
})
export class MensajesMedicosPage  {

	userName: string = "";
  message: string = "";
  messages = [];
  constructor(public navCtrl: NavController,
              private firestore: AngularFirestore,
              private loadingCtrl: LoadingController) {
    this.getMessages();
  }


  getMessages(){
    var messagesRef = firebase.database().ref().child("mensajesMedicos");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];
      for(var key in data){
        this.messages.push(data[key]);
      }
      //this.scrollToBottom();
    });
  }
 sendMessage(){
    var messagesRef = firebase.database().ref().child("mensajesMedicos");
    messagesRef.push({mensaje: this.message, nombre: this.userName});
    this.message = "";
    this.userName = "";
  }
}

