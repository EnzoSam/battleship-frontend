import { rowsNames } from "../constants/battle.constant";
import { BattlePoint } from "./battlePoint.model";

export class BattleField
{
    columsCount = 10;
    rowsCount = 10;
    battlePoints:BattlePoint[]= [];

    constructor()
    {

    }

    generatePoints()
    {
        for(let r = 0; r < this.rowsCount + 1;r++)
        {
            for(let c = 0; c < this.columsCount + 1;c++)
            {                                
                let bPoint = new BattlePoint();
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
                this.battlePoints.push(bPoint);
            }
        }
    }
}