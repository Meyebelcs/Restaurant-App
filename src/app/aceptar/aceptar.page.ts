import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aceptar',
  templateUrl: './aceptar.page.html',
  styleUrls: ['./aceptar.page.scss'],
})
export class AceptarPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }
 Seleccionar(){
    console.log("clickity click!");
    this.router.navigate(['/seleccion-invitado']);
  }
  Home(){
    console.log("clickity click!");
    this.router.navigate(['/home']);
  }
}