import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {

  grados: string = '';
  resultado: number = 0;
  tem: string = '';

  gradosCF(): void {
    console.log("Grados", this.grados);
    console.log("Temperatura", this.tem);

    switch (this.tem) {
      case 'centigrados':
        this.resultado = (parseInt(this.grados) * 9 / 5) + 32;
        break;
      case 'fahrenheit':
        this.resultado = (parseInt(this.grados) - 32) * 5 / 9;
        break;
    }
  }
}
