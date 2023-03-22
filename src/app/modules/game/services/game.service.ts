import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/baseService';
import { BattlePoint } from '../models/battlePoint.model';
import { Game } from '../models/game.model';
import { Ship } from '../models/ship.model';
import { ShipsService } from './ships.service';


@Injectable({
    providedIn: 'root'
})

export class GameService extends BaseService {

    game: Game;

    constructor(protected _http: HttpClient, private _shipsServices:ShipsService) {
        super(_http);
        this.game = this.newGame();
    }

    newGame():Game
    {
        let g = new Game();
        g.battleField.generatePoints();
        g.avaliblesShips.push(this._shipsServices.newAirCarrier());
        g.avaliblesShips.push(this._shipsServices.newSubmarine());
        g.avaliblesShips.push(this._shipsServices.newSubmarine());

        return g;
    }

    getGame():Game
    {
        return this.game;
    }

     putShipPositopm(battlePoint:BattlePoint, ship:Ship, game:Game)
     {
        game.battleField.putShip(ship, battlePoint);
     }
}
