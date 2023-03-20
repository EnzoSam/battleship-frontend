import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ship } from '../../models/ship.model';
import { GameService } from '../../services/game.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ship-list-selection',
  templateUrl: './ship-list-selection.component.html',
  styleUrls: ['./ship-list-selection.component.css']
})
export class ShipListSelectionComponent implements OnInit {

  ships:Ship[];
  @Output() shipClick = new EventEmitter<Ship>();
  constructor(private _gameService:GameService) { 

    this.ships = [];
  }

  ngOnInit(): void {

    this.ships = this._gameService.game.avaliblesShips;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onShipClick(ship:Ship)
  {
    this.shipClick.emit(ship);
  }
}
