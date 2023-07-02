import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { Web3Service } from 'src/app/services/web3.service';
import { AuthService } from '../../services/auth.service';
import { routesPaths } from '../../constants/routes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-type',
  templateUrl: './login-type.component.html',
  styleUrls: ['./login-type.component.css']
})
export class LoginTypeComponent implements OnInit {

  routesPaths:any;
  suscription?:Subscription;

  constructor(private _authService: AuthService,
    private _web3Service: Web3Service,
    private _tokenService:TokenService,
    private _router: Router) {

      this.routesPaths = routesPaths; 

  }

  ngOnInit(): void {
  }

  onUseMetamaskLogin() {

    this.suscription = this._web3Service.onAdressChange().subscribe    
    (value=>
      {
      if(value && value !== '')
        this._router.navigate(["../game"])
      }
    );  
    
    this._web3Service.connect();
  }

  ngOnDestroy(): void {
    if(this.suscription)
    {
      this.suscription.unsubscribe();
    }
  }

}
