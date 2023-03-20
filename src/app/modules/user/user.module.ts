import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './user-routing';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { TextEditorComponent } from 'src/app/components/shared/text-editor/text-editor.component';



@NgModule({
  declarations: [
    LoginComponent,
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: 
  [
    AuthService,
    appRoutingProviders
  ] 
})
export class UserModule { }
