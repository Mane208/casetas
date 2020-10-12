import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';


@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit{
permisos: string;
  constructor(private barcodeScanner: BarcodeScanner,
    private dataLocal: DataLocalService) {}

    ngOnInit() {
      this.permisos = environment.tipo;
      if(this.permisos === 'Condomino'){
        console.log(true);
      }else{
        console.log(false);
      }
      console.log(typeof this.permisos);
    }

ionViewDidEnter(){
console.log('viewDidEnter');
}

ionViewDidLeave(){
console.log('viewDidLeave');
}

ionViewWillEnter(){
console.log('viewWillEnter');
}

ionViewWillLeave(){
console.log('viewWillLeave');
} 

scan(){  
this.barcodeScanner.scan().then(barcodeData => {
console.log('Barcode data', barcodeData);

if ( !barcodeData.cancelled) {
this.dataLocal.guardarRegistro( barcodeData.format, barcodeData.text);
}


}).catch(err => {
console.log('Error', err);

this.dataLocal.guardarRegistro( 'QRcode', 'https://youtube.com');
});
}

}

