import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
@Injectable()
export class ApiCallingService {

  constructor(private _http: Http) { }

  getStockData(stockName) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

     const options = new RequestOptions({headers: headers});
    const URL = 'https://www.quandl.com/api/v3/datasets/NSE/' + stockName + '?api_key=PhfpYFNtngoU35up2x2J&limit=7';
    return this._http.get(URL, options);
  }

}