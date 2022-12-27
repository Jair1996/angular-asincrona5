import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { ResultadosComponent } from './resultados/resultados.component';
import { FormCalculadoraComponent } from './form-calculadora/form-calculadora.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CalculadoraComponent,
    ResultadosComponent,
    FormCalculadoraComponent
  ],
  exports: [
    NavbarComponent,
    CalculadoraComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
