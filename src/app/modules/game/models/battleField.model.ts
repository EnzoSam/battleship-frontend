import { rowsNames } from "../constants/battle.constant";
import { BattlePoint } from "./battlePoint.model";
import { Ship } from "./ship.model";

export class BattleField
{
    columsCount = 10;
    rowsCount = 10;
    battlePoints:BattlePoint[][]= [];

    constructor()
    {

    }

    generatePoints()
    {
        for(let r = 0; r < this.rowsCount;r++)
        {
            this.battlePoints[r] = [];
            for(let c = 0; c < this.columsCount;c++)
            {                                
                let bPoint = new BattlePoint();
                bPoint.numRow = r;
                bPoint.numCol=c;
                this.battlePoints[r][c] = bPoint;
            }
        }
    }

    putShip(ship:Ship, point:BattlePoint)
    {
        let n = 0;
        if(point.numCol+ship.totalPlaces <= this.columsCount)
        {
            n=1;
        }
        else if(point.numCol-ship.totalPlaces >= 1){
            n=-1;
        }

        console.log(ship);
        console.log(n);
        console.log(this.columsCount);
        console.log(point);
        let startPosition = point.numCol;
        for(let p of ship.parts)
        {
            this.battlePoints[point.numRow][startPosition].shipPart = p;
            startPosition+=n;
            
        }
    }
}