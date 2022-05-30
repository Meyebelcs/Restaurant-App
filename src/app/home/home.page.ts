import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {
  }

  Aceptar(){
    console.log("clickity click!");
    this.router.navigate(['/aceptar']);
  }
  Rechazar(){
    console.log("clickity click!");
    this.router.navigate(['/rechazar']);
  }
  Home(){
    console.log("clickity click!");
    this.router.navigate(['/home']);
  }
  Inicio(){
    console.log("clickity click!");
    this.router.navigate(['menu/inicio']);
  }
login(){
  console.log("clickity click!");
    this.router.navigate(['/login']);
}

}
