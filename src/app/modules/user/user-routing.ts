import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { routesPaths } from './constants/routes';
import { LoginTypeComponent } from './components/login-type/login-type.component';


//DEFINIR LAS RUTAS
const appRoutes: Routes = [
    {
        path:'', redirectTo:  routesPaths.login_type
    },
    {path:routesPaths.login_type,component:LoginTypeComponent},
    {path:routesPaths.login,component:LoginComponent},

];


//EXPORTAR CONFIGURACION
export const appRoutingProviders: any[] = [];

export const routing:ModuleWithProviders<any> = RouterModule.forChild(appRoutes);
