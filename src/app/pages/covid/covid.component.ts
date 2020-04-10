import { Component, OnInit } from '@angular/core';
import { CovidNewsService } from '../../services/covidNews.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  closeResult: string;
  covidData = [];
  public ghData = {};

  ghCorona = {};

  myCountry = 'Ghana';

  constructor(private covidDataService: CovidNewsService) { }

  ngOnInit() {
    console.log('Covid component loaded');
    this.loadCovidData();
  }




  loadCovidData() {
    this.covidDataService.sendGetCovidData().subscribe((data: any) => {
      this.covidData = data.Countries;
      this.checkCovidData(data.Countries);
    });
   }

   loadGhCoronaData() {
    this.covidDataService.loadCovidDataGH().subscribe((data) => {
       console.log(data);
       this.ghCorona = data[data.length - 1];
       console.log(this.ghCorona);
    });
  }

   checkCovidData(data) {
      data.forEach( value => {
          if( value.Country === 'Ghana') {
            this.ghData = value;
            console.log(this.ghData);
          }
      });
   }



}
