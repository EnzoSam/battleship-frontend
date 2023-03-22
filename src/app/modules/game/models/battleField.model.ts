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
        for(let r = 0; r <= this.rowsCount + 1;r++)
        {
            this.battlePoints[r] = [];
            for(let c = 0; c <= this.columsCount + 1;c++)
            {                                
                let bPoint = new BattlePoint();
                bPoint.numRow = r;
                bPoint.numCol=c;
                bPoint.row = rowsNames[r-1];
                bPoint.column = c.toString();
                if(r === 0 && c > 0)
                {                                        
                    bPoint.caption = c.toString();
                    bPoint.isHeader=true;
                }
                else if(c === 0 && r>0)
                {
                    bPoint.caption = rowsNames[r-1];
                    bPoint.isHeader=true;
                }
                this.battlePoints[r][c] = bPoint;
            }
        }
    }

    putShip(ship:Ship, point:BattlePoint)
    {
        let n = 0;
        let startPosition = 0;
        if(point.numCol+ship.totalPlaces <= this.columsCount)
        {
            n=1;
            startPosition=point.numCol;
        }
        else if(point.numCol+ship.totalPlaces >= 1){
            n=-1;
            startPosition = point.numCol+ship.totalPlaces;
        }

        for(let p of ship.parts)
        {
            this.battlePoints[point.numRow][startPosition].shipPart = p;
            startPosition+=n;
        }
    }
}