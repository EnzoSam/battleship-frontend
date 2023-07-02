import { Component, OnInit } from '@angular/core';
import { routesPaths } from '../../constants/routes';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  title: string;
  routesPaths = routesPaths;
  isEmmiter: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.title = '';
  }

  ngOnInit(): void {
  }

}
