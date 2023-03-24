import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShipPart } from '../../models/shipPart.model';

@Component({
  selector: 'app-ship-part',
  templateUrl: './ship-part.component.html',
  styleUrls: ['./ship-part.component.css']
})
export class ShipPartComponent implements OnInit {

  @Input() shipPart?:ShipPart;;
  @Output() partClick = new EventEmitter<ShipPart>();
  constructor() { }

  ngOnInit(): void {
  }

  onPartClick()
  {
    if(this.shipPart)
      this.partClick.emit(this.shipPart);
      console.log(this.shipPart);
  }
}
