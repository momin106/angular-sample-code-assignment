import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'dashboard-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnChanges {
  @Input() labels: any = [];
  @Input() datasets: any = [];
  title = 'Chart Data';
  public lineChartLegend = false;
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.labels || changes.datasets) {
      this.lineChartData = {
        labels: this.labels,
        datasets: this.datasets,
      };
    }
  }

  ngOnInit() {}
}
