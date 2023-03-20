import { ShipPart } from "./shipPart.model";

export class Ship{
    name='';
    totalPlaces =1;
    parts:ShipPart[]=[];


    generateParts()
    {
        for(let c = 0;c<this.totalPlaces;c++)
        {
            let part = new ShipPart();
            part.position = c;
            this.parts.push(part);
        }
    }
}