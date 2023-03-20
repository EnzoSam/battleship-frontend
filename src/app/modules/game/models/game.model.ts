import { BattleField } from "./battleField.model";
import { BattlePoint } from "./battlePoint.model";
import { Ship } from "./ship.model";

export class Game{

    battleField:BattleField;
    avaliblesShips:Ship[] = [];

    constructor()
    {
        this.battleField  = new BattleField();    
    }

}