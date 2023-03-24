import { Component, OnInit } from '@angular/core';
import { rowsNames } from '../../constants/battle.constant';
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
  rowsHeader:any;

  constructor(private _gameService:GameService) {

    this.rowsHeader = rowsNames;
    this.game = _gameService.getGame();
   }

  ngOnInit(): void {

  }

  onShipSelected(ship:Ship)
  {
    this.shipSelected = ship;
  }

  onPointSelected(point:BattlePoint)
  {
    if(this.shipSelected)
    {
      this._gameService.putShipPositopm(point, this.shipSelected,this.game);
    }
  }
}
