import { AuthService } from './Shared/Auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserProfile } from './Shared/Auth/user-profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Token';
  userprofile?:UserProfile | null 

  constructor(private auth :AuthService){}
  ngOnInit(): void {
    this.auth.user.subscribe((data)=>{
    this.userprofile=data
    })

  }


}
