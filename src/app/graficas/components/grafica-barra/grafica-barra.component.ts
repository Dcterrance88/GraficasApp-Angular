import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() public barChartLabels: Label[] = [
    // '2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];
  @Input() public barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#3D8AFF', hoverBackgroundColor: '#66A5FF' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#384FE8', hoverBackgroundColor: '#5D72E8' },
    // { data: [8, 42, 65, 43, 87, 56, 33], label: 'Series C', backgroundColor: '#624BFF', hoverBackgroundColor: '#8473FF' },
  ];
  public barChartOptions: ChartOptions = { responsive: true };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  constructor() {
    console.log()
  }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType = 'horizontalBar'
    }
  }

}
