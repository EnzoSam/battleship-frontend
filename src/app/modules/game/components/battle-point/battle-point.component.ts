import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BattlePoint } from '../../models/battlePoint.model';

@Component({
  selector: 'app-battle-point',
  templateUrl: './battle-point.component.html',
  styleUrls: ['./battle-point.component.css']
})
export class BattlePointComponent implements OnInit {

  @Input() point?: BattlePoint;
  @Output() pointClick = new EventEmitter<BattlePoint>();
  constructor() {
      

   }

  ngOnInit(): void {
  }

  onPointClick()
  {
    this.pointClick.emit(this.point);
  }
}
