import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  value1: number = 0;
  value2: number = 0;
  currentResult: number = 0;
  results: Array<string> = [];

  sumar() {
    this.currentResult = this.value1 + this.value2;
    this.addToHistory('+');
  }

  restar() {
    this.currentResult = this.value1 - this.value2;
    this.addToHistory('-');
  }

  multiplicar() {
    this.currentResult = this.value1 * this.value2;
    this.addToHistory('*');
  }

  dividir() {
    if (this.value2 == 0) {
      return;
    }

    this.currentResult = this.value1 / this.value2;
    this.addToHistory('/');
  }

  addToHistory(oeprator: string) {
    this.results.unshift(
      `${this.value1} ${oeprator} ${this.value2} = ${this.currentResult}`
    );
  }
}
