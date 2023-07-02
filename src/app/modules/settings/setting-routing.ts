import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PanelComponent } from './components/panel/panel.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { routesParams, routesPaths } from './constants/routes';
import { GamesComponent } from './components/games/games.component';


//DEFINIR LAS RUTAS
const appRoutes: Routes = [
    { path: routesPaths.root, component: PanelComponent, 
        children:[
                {path:routesPaths.games,component:GamesComponent}
            ]
    },
];


//EXPORTAR CONFIGURACION
export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders<any> = RouterModule.forChild(appRoutes);
