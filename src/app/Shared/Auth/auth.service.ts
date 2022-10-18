import { UserProfile } from './user-profile';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenModel } from './token-model';
import { LoinModel } from './../../auth/loin-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwthelper = new JwtHelperService();
  user = new BehaviorSubject<UserProfile | null>(null);
  constructor(private http: HttpClient) {}

  getToken() {
    var localstorageToken = localStorage.getItem('tokens');
    if (localstorageToken) {
      var Token = JSON.parse(localstorageToken) as TokenModel;
      var isTokenExpired = this.jwthelper.isTokenExpired(Token.access_token);

      if (isTokenExpired) {
        this.user.next(null);

        return '';
        var userinfo = this.jwthelper.decodeToken(
          Token.access_token
        ) as UserProfile;
        this.user.next(userinfo);
        return Token.access_token;
      }
    }
    return '';
  }
  userlogin(payload: LoinModel) {
    return this.http.post('http://localhost:3000/auth/login', payload).pipe(
      map((data: any) => {
        var tokens = data as TokenModel;
        localStorage.setItem('tokens', JSON.stringify(tokens));
        data = this.jwthelper.decodeToken(tokens.access_token);
        this.user.next(data);
        return true;
      }),
      catchError((error) => {
        console.log(error);
        return of(false);
      })
    );
  }
}
