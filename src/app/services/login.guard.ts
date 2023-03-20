import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { AuthService } from './authService.service';

@Injectable()
export class LoginGuard implements CanActivate
{
    
    constructor(private _router: Router,
        private _usuarioService:AuthService)
    {

    }

    canActivate()
    {     
        let identity = this._usuarioService.getIdentity();
        if(identity)
        {
            alert('guaaard');
            console.log('guaaaaaaaaaaaard');
            this._router.navigate(['']);
            return false;
            
        }
        else{
            return true;
        }
    }
}