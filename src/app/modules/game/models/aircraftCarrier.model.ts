import { Ship } from "./ship.model";

export class AircraftCarrier extends Ship
{
    constructor()
    {
        super();
        this.totalPlaces = 4;
        this.name = 'Porta Aviones';
        this.generateParts();
    }
}