import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-last-area-chart',
  templateUrl: './last-area-chart.component.html',
  styleUrl: './last-area-chart.component.scss'
})
export class LastAreaChartComponent implements OnInit  {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  public chart: any;

  createChart() {
    this.chart = new Chart("lastYearChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "Sales in 2022",
            data: [13, 16, 21, 28, 32, 34, 32, 31, 30, 26, 20, 14],
            // borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            pointRadius: 0,
            // pointBackgroundColor: 'rgb(255, 99, 132)',
            fill: true,
          }
        ]
      },
      options: {
        aspectRatio: 2,
        scales: {
          x: {
            ticks: {
              color: "#ccc"
            }
          },
          y: {
            ticks: {
              color: "#ccc"
            }
          },
      }
      }
    });
  }

}