import { Component, OnInit } from '@angular/core';
import { BattlePoint } from '../../models/battlePoint.model';
import { Game } from '../../models/game.model';
import { Ship } from '../../models/ship.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.css']
})
export class BattleFieldComponent implements OnInit {

  game:Game;
  shipSelected?:Ship;

  constructor(private _gameService:GameService) {

    this.game = _gameService.getGame();
   }

  ngOnInit(): void {

  }

  onShipSelected(ship:Ship)
  {
    this.shipSelected = ship;
    alert(ship);
  }

  onPointSelected(point:BattlePoint)
  {
    if(this.shipSelected)
      point.caption = this.shipSelected?.name;

      alert(point);
  }
}
