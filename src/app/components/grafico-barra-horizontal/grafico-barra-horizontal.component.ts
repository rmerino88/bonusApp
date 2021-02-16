import { Component, NgModule } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {

  results: any[] = single;
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };
  colorScheme = 'nightLights';

  constructor() {
    // Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(`Event: ${event}`);
    console.log(event);
    this.results.forEach(
      columnData => {
        console.log(`Value:   ${columnData.value}`);
        columnData.value = 5;
      });
    console.log(`Results:  ${this.results}`);
    console.log(this.results);
  }
}
