import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './user-routing';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { TextEditorComponent } from 'src/app/components/shared/text-editor/text-editor.component';
import { Web3Service } from 'src/app/services/web3.service';
import { LoginTypeComponent } from './components/login-type/login-type.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';



@NgModule({
  declarations: [
    LoginComponent,
    TextEditorComponent,
    LoginTypeComponent
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
    AuthService,
    Web3Service,
    appRoutingProviders
  ] 
})
export class UserModule { }
