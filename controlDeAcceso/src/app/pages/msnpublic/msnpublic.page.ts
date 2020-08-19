import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msnpublic',
  templateUrl: './msnpublic.page.html',
  styleUrls: ['./msnpublic.page.scss'],
})
export class MsnpublicPage implements OnInit {
Fecha: Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
