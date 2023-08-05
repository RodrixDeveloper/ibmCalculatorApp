import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'Masculino';

  constructor(private router: Router) {}

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  masculino() {
    this.sexo = 'Masculino';
  }

  femenino() {
    this.sexo = 'Femenino';
  }
  calcularBMI() {
    const BMI = this.peso / Math.pow(this.altura / 100, 2);
    // console.log((BMI.toFixed(1)));
    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }

  private incrementTimer: any;

  cambiarPesoRapido(direccion: number) {
    // Cambiar rápidamente el peso cuando se mantiene presionado
    this.incrementTimer = setInterval(() => {
      this.peso += direccion;
    }, 100); // Incrementar cada 100 ms (ajustar según preferencia)
  }

  cambiarPesoIndividual(direccion: number) {
    // Cambiar el peso de uno en uno cuando se hace clic
    this.peso += direccion;
  }

  cambiarEdadRapido(direccion: number) {
    this.incrementTimer = setInterval(() => {
      this.edad += direccion;
    }, 100);
  }

  cambiarEdadIndividual(direccion: number) {
    this.edad += direccion;
  }

  detenerCambioRapido() {
    // Detener el cambio rápido cuando se suelta el botón
    clearInterval(this.incrementTimer);
    
  }
}
