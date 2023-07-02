import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { IUserLogin } from '../../interfaces/iuserLogin';
import { AuthService } from '../../services/auth.service';
import { Web3Service } from 'src/app/services/web3.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: IUserLogin
  valid?: boolean;
  constructor(private _authService: AuthService,
    private _web3Service: Web3Service,
    private _tokenService:TokenService,
    private _router: Router) {
    this.login = _authService.newLogn();
  }

  ngOnInit(): void {
  }


}
