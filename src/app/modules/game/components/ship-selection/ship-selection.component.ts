import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ship } from '../../models/ship.model';

@Component({
  selector: 'app-ship-selection',
  templateUrl: './ship-selection.component.html',
  styleUrls: ['./ship-selection.component.css']
})
export class ShipSelectionComponent implements OnInit {

  @Input() ship?:Ship;
  @Output() shipClick = new EventEmitter<Ship>();

  constructor() { }

  ngOnInit(): void {
  }

  onShipClick()
  {
    this.shipClick.emit(this.ship);
    console.log(this.ship);
  }
}
