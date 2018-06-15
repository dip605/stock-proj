import { Component, OnInit } from '@angular/core';
import { ApiCallingService } from '../../core/api-calling.service';
@Component({
  selector: 'app-investment-analytics',
  templateUrl: './investment-analytics.component.html',
  styleUrls: ['./investment-analytics.component.css']
})
export class InvestmentAnalyticsComponent implements OnInit {
  tableData: any;
  constructor(private _apiCalling: ApiCallingService) { }

  ngOnInit() {
    this._apiCalling.getStockData('RELIANCE').subscribe((data)=>{
      this.tableData = data.json();
      this.tableData = this.tableData.dataset;
      console.log(this.tableData);
  });
}

}
