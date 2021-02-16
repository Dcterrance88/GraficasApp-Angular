import { Component } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others']; 
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    {
      backgroundColor: [
        '#66FFFF',
        '#5DE8C1',
        '#74FFB0',
        '#5DE872',
        '#7FFF66',
      ],
    }
  ]

}
