import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { routesPaths } from './constants/gameRoutes';


//DEFINIR LAS RUTAS
const appRoutes: Routes = [
    {
        path:'',
        component:GameComponent
    },
];


//EXPORTAR CONFIGURACION
export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders<any> = RouterModule.forChild(appRoutes);
