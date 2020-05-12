import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  title = 'bookNow';
  isShow = false;
  router: string;
  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

}
