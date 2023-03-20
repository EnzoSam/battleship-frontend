import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/app/home/home.component';
import { DefaultErrorComponent } from './components/shared/default-error/default-error.component';
import { routesPaths } from './constants/routes';
import { GuardService as guard} from './services/guard.service';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:routesPaths.home
  },
  {
    path:routesPaths.home,
    component:HomeComponent
  },
  { path: routesPaths.settings,
    canActivate: [guard], data: { expectedRol: ['admin', 'user']},
  children:[
      {
          path:'',
          loadChildren: ()=> import ('./modules/settings/settings.module').then((m)=>m.SettingsModule)
      }
  ]},   
  { path: routesPaths.auth,
    children:[
        {
            path:'',
            loadChildren: ()=> import ('./modules/user/user.module').then((m)=>m.UserModule)
        }
    ]},   
    { path: routesPaths.game,
      children:[
          {
              path:'',
              loadChildren: ()=> import ('./modules/game/game.module').then((m)=>m.GameModule)
          }
      ]},     
  {
    path:'**',
    component:DefaultErrorComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
