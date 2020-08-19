import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public email: string;
  public password: string;
  public users: string;

 // user = {} as User;
  constructor( private toastCtrl: ToastController, 
               private loadingCtrl: LoadingController,
               private afAuth: AuthService,
               private router: Router
               
            ) { }

  ngOnInit() { }

  onSubmitRegistro(){
    this.afAuth.register(this.email, this.password, this.users).then( auth => {
      this.router.navigate(['login/'])
    }).catch(err => console.log(err))
  }


}
// async register(user: User){
//   if(this.formValidation()){

//     //mostrar carga de espera
//    let loader = this.loadingCtrl.create({
//       message: "please wait..."
//     });
//     (await loader).present();

//     try {
//       await this.afAuth
//       .createUserWithEmailAndPassword(user.email, (user.password, user.users))
//       .then(data => {
//         console.log(data.user.uid);
// //redirigir a Home

//         this.navCtrl.navigateRoot("btn-inicio");

//       }); 

//     } catch(e){
//       this.showToast(e);
//     }
//     //cerrar carga de espera
    
//     (await loader).dismiss();
//   }
// }

// formValidation(){
//   if(!this.user.password){
//     this.showToast("ingresa nombre de usuario");
//     return false;
//   }
  
//   if(!this.user.email){
//     this.showToast("Enter email");
//     return false;
//   }

//   if(!this.user.password){
//     this.showToast("Enter password");
//     return false;
//   }

  
//   return true;
// }

// showToast(message: string){
//   this.toastCtrl.create({
//     message: message,
//     duration: 3000
//   })
//   .then(toastData => toastData.present());
// }
// }