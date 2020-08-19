import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth,
              private firestore: AngularFirestore
              ) { }

  login(email: string, password: string){

    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));   

    });
  }
  register(email: string, password: string, users: string){
    return new Promise ((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res =>{
        //console.log();
        const uid = res.user.uid;
        this.firestore.collection('users').doc(res.user.uid).set({
          users: users,
          uid: uid
        })
        resolve(res)
      }).catch( err => reject(err))
    })

  }
    

}
