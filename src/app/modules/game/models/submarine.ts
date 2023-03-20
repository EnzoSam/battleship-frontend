import { Ship } from "./ship.model";

export class Submarine extends Ship
{
    constructor()
    {
        super();
        this.totalPlaces = 3;
        this.name = 'Submarino';        
        this.generateParts();
    }
}