import { AuthService } from './Shared/Auth/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { H0meComponent } from './h0me/h0me.component';
import {  HttpClientModule} from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
export function jwtOptionsFactory(AuthService: AuthService){
  return{
    tokenGetter:()=>
    {return AuthService.getToken()}
  }
   allowedDomains:["localhost:3000"];
   disallowedRoutes:["http://localhost:3000/auth/login",
  " http://localhost:3000/auth/refreshtoken"]

}
@NgModule({
  declarations: [
    AppComponent,
    H0meComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    JwtModule.forRoot({
      jwtOptionsProvider:{
       provide:JWT_OPTIONS,
       useFactory:jwtOptionsFactory,
       deps:[AuthService]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
