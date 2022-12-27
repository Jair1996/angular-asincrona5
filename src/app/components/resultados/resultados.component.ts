import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  @Input() currentResult: number = 0;
  @Input() results: Array<string> = [];
}
