import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-calculadora',
  templateUrl: './form-calculadora.component.html',
  styleUrls: ['./form-calculadora.component.css'],
})
export class FormCalculadoraComponent {
  @Output() changeValue1 = new EventEmitter<number>();
  @Output() changeValue2 = new EventEmitter<number>();

  value1: number = 0;
  value2: number = 0;
}
