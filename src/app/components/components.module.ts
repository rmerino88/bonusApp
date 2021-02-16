import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


/* Para aglutinar los diferentes componentes
 y evitar importarlos uno a uno en el app.module.ts
 creamos un módulo que los engloba a todos ellos.
 Para que los componentes puedan ser utilizados
 han de ser registrados en exports.
*/
/* Al tener definido aquí el elemento navbar
  que hace uso de la función routerLink
  es necesario importar en este módulo padre
  el AppRoutingModule.
*/
@NgModule({
  declarations: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ],
  exports: [
    NavbarComponent,
    GraficoBarraHorizontalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
