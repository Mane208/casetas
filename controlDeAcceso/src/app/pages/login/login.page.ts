import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, public router: Router){

  }
ngOnInit() { }

  onSubmit(){
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['btn-inicio/']);
    }).catch(err => alert('Los datos nos son Correctos :( o el usuario no existe'))
  }

}
// tipo: any = {};
//   user = {} as User;
//   constructor(private toastCtrl: ToastController,
//     private loadingCtrl: LoadingController,
//     private afAuth: AngularFireAuth,
//     private navCtrl: NavController) { }

   
 

//   async login(user: User) {
//     if (this.formValidation()) { 
//       //mostrar carga de espera
//       let loader = this.loadingCtrl.create({
//         message: "please wait..."
//       });
//       (await loader).present();

//       try {
//         await this.afAuth
//           .signInWithEmailAndPassword(user.email, user.password)
//           .then(data => {
//             console.log(data);
//             //redirigir a home 
//             this.navCtrl.navigateRoot("btn-inicio");
//           });
//       } catch (e) {
//         this.showToast(e);
//       }
//       //borrar carga de espera(loader)
//       (await loader).dismiss();
//     }
//   }

//   formValidation() {
//     if (!this.user.email) {
//       this.showToast("Enter email");
//       return false;
//     }

//     if (!this.user.password) {
//       this.showToast("Enter password");
//       return false;
//     }
//     return true;
//   }

//   showToast(message: string) {
//     this.toastCtrl.create({
//       message: message,
//       duration: 3000
//     })
//       .then(toastData => toastData.present());
//   }

//   onClick( ){
//     console.log(this.user);

//   }

// }