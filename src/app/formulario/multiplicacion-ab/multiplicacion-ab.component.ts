import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-ab',
  templateUrl: './multiplicacion-ab.component.html',
  styleUrls: ['./multiplicacion-ab.component.css']
})
export class MultiplicacionAbComponent {
  num1 = 0;
  num2 = 0;
  res = 0;
  operacion='';

  multiplicar() {
    this.operacion = '' + this.num2;
    this.res = this.num1 * this.num2;
    for (let i = 1; i < this.num1; i++) {
      this.operacion += " + " + this.num2;
    }
    this.operacion += ' = ' + this.res
  }

}
