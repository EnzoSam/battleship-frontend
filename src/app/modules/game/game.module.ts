import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './game-routing';
import { GameComponent } from './components/game/game.component';
import { BattleFieldComponent } from './components/battle-field/battle-field.component';
import { BattlePointComponent } from './components/battle-point/battle-point.component';
import { GameService } from './services/game.service';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ShipListSelectionComponent } from './components/ship-list-selection/ship-list-selection.component';
import { ShipSelectionComponent } from './components/ship-selection/ship-selection.component';
import { ShipsService } from './services/ships.service';


@NgModule({
  declarations: [

  
    GameComponent,
        BattleFieldComponent,
        BattlePointComponent,
        ShipListSelectionComponent,
        ShipSelectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    routing
  ],
  providers: 
  [
    GameService,
    ShipsService,
    appRoutingProviders
  ] 
})
export class GameModule { }
