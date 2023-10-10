import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  nombre = '';
  compradores = 0;
  resultado = '';
  tarjeta = ''
  boletos = 0;
  precio = 12;
  persona_boletos = 0;
  precio_total = 0.0;
  descuento = 0.0;

  cobro(): void {
    console.log(this.nombre);
    console.log(this.compradores);
    console.log(this.tarjeta);
    console.log(this.boletos);

    this.persona_boletos = this.compradores * 7;
    if (this.persona_boletos >= this.boletos) {
      this.precio_total = this.boletos * this.precio;

      if (this.boletos >= 6) {
        this.descuento = this.precio_total * 0.85;
        this.precio_total = this.descuento;
      }
      if (this.boletos >= 3 && this.boletos <=5) {
        this.descuento = this.precio_total * 0.9;
        this.precio_total = this.descuento;
      }
      if(this.tarjeta == 'si'){
        this.descuento = this.precio_total *0.9;
        this.precio_total =this.descuento;
      }
      this.resultado = String(this.precio_total);
    }
    else{
      this.resultado = 'Solo 7 boletos por persona'
    }
  }

  salir(): void{
    this.nombre = '';
    this.compradores = 0;
    this.resultado = '';
    this.tarjeta = ''
    this.boletos = 0;
    this.precio = 12;
    this.persona_boletos = 0;
    this.precio_total = 0.0;
    this.descuento = 0.0;
  }
}
