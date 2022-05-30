import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seleccion-invitado',
  templateUrl: './seleccion-invitado.page.html',
  styleUrls: ['./seleccion-invitado.page.scss'],
})
export class SeleccionInvitadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AbreGanador(){
    console.log("clickity click!");
    this.router.navigate(['/ganador']);
  }
  Aceptar(){
    console.log("clickity click!");
    this.router.navigate(['/aceptar']);
  }
  Home(){
    console.log("clickity click!");
    this.router.navigate(['/home']);
  }
}
