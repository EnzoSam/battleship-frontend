import { ShipPart } from "./shipPart.model";

export class BattlePoint
{
    caption='';
    row = '';
    column='';    
    isHeader=false;
    numRow=0;
    numCol=0;
    shipPart?:ShipPart;
    constructor()
    {

    }
}