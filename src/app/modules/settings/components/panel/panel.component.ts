import { Component, OnInit } from '@angular/core';
import { routesPaths } from '../../constants/routes';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  paths:any;
  constructor() { 
    this.paths = routesPaths;
  }

  ngOnInit(): void {
  }

}
