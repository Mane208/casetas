import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-btn-inicio',
  templateUrl: './btn-inicio.page.html',
  styleUrls: ['./btn-inicio.page.scss'],
})
export class BtnInicioPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();

  }
}