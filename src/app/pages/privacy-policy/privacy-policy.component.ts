import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAccordion, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  @ViewChild('myaccordion', ) accordion: NgbAccordion;

  constructor() { }

  ngOnInit() {
  }


  beforeChange($event: NgbPanelChangeEvent ) {
    console.log($event.panelId);
    // if ($event.panelId == 'panelOne') {
    //   $event.preventDefault();
    // }
    // if ($event.panelId === 'panelTwo' && $event.nextState === false) {
    //   $event.preventDefault();
    // }
  }

  togglePanel(id) {
    this.accordion.toggle(id);
  }

}
