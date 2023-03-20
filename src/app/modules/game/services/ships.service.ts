import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/baseService';
import { AircraftCarrier } from '../models/aircraftCarrier.model';
import { Game } from '../models/game.model';
import { Ship } from '../models/ship.model';
import { Submarine } from '../models/submarine';


@Injectable({
    providedIn: 'root'
})

export class ShipsService extends BaseService {


    constructor(protected _http: HttpClient) {
        super(_http);
    }

    newAirCarrier():Ship
    {
        let s = new AircraftCarrier();        
        return s;
    }

    newSubmarine():Ship
    {
        let s = new Submarine();
        return s;
    }
}
