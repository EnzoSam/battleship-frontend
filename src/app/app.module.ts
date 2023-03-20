import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthService } from './services/authService.service';
import { LoginGuard } from './services/login.guard';
import { NoLoginGuard } from './services/noLogin.guard';
import { InterceptorService } from './services/interceptor.service';
import { TokenService } from './services/token.service';
import { AppService } from './services/app.service';
import { GuardService } from './services/guard.service';
import { Web3Service } from './services/web3.service';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { SkeletonComponent } from './components/layout/skeleton/skeleton.component';
import { HomeComponent } from './components/app/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    SkeletonComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [
        {
      provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true
    },
    AuthService,
    LoginGuard,
    NoLoginGuard,
    TokenService,
    AppService,
    GuardService,
    Web3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
