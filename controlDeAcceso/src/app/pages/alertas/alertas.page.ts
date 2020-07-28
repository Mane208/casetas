import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';


@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage{

  constructor(private barcodeScanner: BarcodeScanner,
    private dataLocal: DataLocalService) {}

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

