import { Component} from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-msnpublic',
  templateUrl: './msnpublic.page.html',
  styleUrls: ['./msnpublic.page.scss'],
})
export class MsnpublicPage {
Fecha: Date = new Date();
   //@ViewChild("content") content: any;
   userName: string = "";
   message: string = "";
   messages = [];
   constructor(public navCtrl: NavController,
               private firestore: AngularFirestore,
               private loadingCtrl: LoadingController) {
     this.getMessages();
   }
 
 
   getMessages(){
     var messagesRef = firebase.database().ref().child("mensajespublicos");
     messagesRef.on("value", (snap) => {
       var data = snap.val();
       this.messages = [];
       for(var key in data){
         this.messages.push(data[key]);
       }
       //this.scrollToBottom();
     });
   }
   // scrollToBottom(){
   //   var contentEnd = document.getElementById("content-end").offsetTop;
   //   this.content.scrollTo(0, contentEnd, 300);
   // };
 
   sendMessage(){
     var messagesRef = firebase.database().ref().child("mensajespublicos");
     messagesRef.push({mensaje: this.message, nombre: this.userName});
     this.message = "";
     this.userName = "";
   }
   deleteMessage(child: string) {
     //loading
     let loader = this.loadingCtrl.create({
       message: "deleting...."
     });
     var messagesRef = firebase.database().ref().child("mensajespublicos");
     messagesRef.remove();
     
   }
 }
