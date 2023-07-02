import { Component, OnInit } from '@angular/core';
import { routesPaths } from 'src/app/constants/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  routesPaths:any;
  constructor() { 

    this.routesPaths = routesPaths;
  }

  ngOnInit(): void {
  }

}
