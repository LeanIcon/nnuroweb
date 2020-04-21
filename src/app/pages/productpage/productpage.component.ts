import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToFormPage() {
    this.router.navigate(['/productpage']);
  }

}
