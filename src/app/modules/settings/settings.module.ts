import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { PanelComponent } from './components/panel/panel.component';
import { appRoutingProviders, routing } from './setting-routing';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { InterceptorService } from 'src/app/services/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';




@NgModule({
  declarations: [
    PanelComponent,
    PersonalDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: 
  [
    appRoutingProviders,
    {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    }
  ] 
})
export class SettingsModule { }
