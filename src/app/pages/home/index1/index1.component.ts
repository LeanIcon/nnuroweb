import { PostService } from './../../../services/post.service';
import { Observable } from 'rxjs/Observable';
import { CovidNewsService } from './../../../services/covidNews.service';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ScrollSpyService } from 'ngx-scrollspy';

@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css'],
  encapsulation: ViewEncapsulation.None,
  // styles: [`
  //   .dark-modal .modal-content {
  //     background-color: #000000;
  //     color: white;
  //     background: none;
  //     border: none;
  //   }
  //   .dark-modal .modal-header {
  //     border : none
  //   }
  //   .dark-modal .close {
  //     color: white;
  //   }
  // `]
})
export class Index1Component implements OnInit {

  closeResult: string;
  covidData = [];
  public ghData = {};
  ghCorona = {};

  myCountry = 'Ghana';

  id = 'JlvxDa7Sges';
  playerVars = {
    cc_lang_pref: 'en'
  };

  private player;
  private ytEvent;

  constructor(private modalService: NgbModal, private covidDataService: CovidNewsService, private postService: PostService) {}


  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg'  });
  }


  ngOnInit() {

    this.loadCovidData();
    // this.loadPostData();
    this.loadGhCoronaData();

    document.getElementById('navbar1').classList.add('navbar-white');

    window.onscroll = function() { myFunction(); };
    const navbar1 = document.getElementById('navbar1');
    function myFunction() {
       if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
         navbar1.style.backgroundColor = '#ffffff';
         navbar1.style.padding = '10px';
       } else {
         navbar1.style.backgroundColor = '';
       }
     }
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

  //  loadPostData() {
  //     this.postService.getPostsData().subscribe((data: any) => {
  //       console.log(data);
  //     });
  //  }


   checkCovidData(data) {
      data.forEach( value => {
          if( value.Country === 'Ghana') {
            this.ghData = value;
            console.log(this.ghData);
          }
      });
   }

}
