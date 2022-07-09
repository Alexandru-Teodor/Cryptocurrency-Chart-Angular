import { Component, OnInit, Input} from '@angular/core';
import { createChart} from 'lightweight-charts';
import { SharedService } from 'src/app/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  coin_symbol:string = "";
  time_interval:string = "";
  
  @Input() user_coin:string = "";
  @Input() user_interval:string = "";

  clickEventSubscription: Subscription;

  constructor(private sharedService:SharedService) {
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe(() => {
        this.drawChart();
    })
   }

  ngOnInit(): void {
  }

  chartProperties = {
    timeScale: {
      timeVisible:true,
      secondsVisible:false,
    }
  }

  drawChart() {
    const previous_chart:any = document.body.lastChild
    document.body.removeChild(previous_chart);
    const chart = createChart(document.body, this.chartProperties);
    const candleSeries = chart.addCandlestickSeries();
    fetch(`https://api.binance.com/api/v3/klines?symbol=${this.user_coin}USDT&interval=${this.user_interval}&limit=1000`)
  
    .then(res => res.json())
    .then(data => {
      const cdata= data.map((d: any) => {
        return {time: d[0]/1000, open:parseFloat(d[1]), high:parseFloat(d[2]), low:parseFloat(d[3]), close:parseFloat(d[4])}
      });
      candleSeries.setData(cdata);
    })
    .catch(err => console.log(err));
  }
}
