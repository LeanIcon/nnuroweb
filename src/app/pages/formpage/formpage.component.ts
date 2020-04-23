import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

navigateToFormPage() {
    this.router.navigate(['/formpage']);
  }
}
