import { AuthService } from './../../Shared/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoinModel } from '../loin-model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private AuthService: AuthService ,private router:Router) {}
  loginform: LoinModel = { username: '',
                            password: '' };
  ngOnInit(): void {}
  userlogin() {
    this.AuthService.userlogin(this.loginform).subscribe((data) => {
      if (data) {
        this.router.navigateByUrl('')
        alert('Success');
      } else {
        alert('Failed');
      }
    });
  }
}
