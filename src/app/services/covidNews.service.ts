

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// import { Observable } from 'rxjs/Observable';
// import { map, catchError } from 'rxjs/operators;

@Injectable({
  providedIn: 'root'
})
export class CovidNewsService {
  private REST_COIVD_API = 'https://api.covid19api.com/summary';

  constructor(private httpClient: HttpClient) { }

  public sendGetCovidData(): Observable<any> {
    return this.httpClient.get(this.REST_COIVD_API);
  }

}
