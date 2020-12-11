import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../shared/user-service.service';
import {Router} from '@angular/router';
import {LoginServiceService} from '../shared/login-service.service';
import {User} from '../model/User';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  users: User[];
  message: string;

  logged: boolean;

  constructor(private loginService: LoginServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  verifierLogin(user: User){
    let log = 0;
    this.loginService.getUsername().subscribe(
      (data) => {
        this.users = data;
        for(let i = 0; i < this.users.length ; i++){
          if(this.users[i].username === user.username && this.users[i].password === user.password){
            log = 1;
            this.logged = true;
            this.message = 'Welcome ' + user.username;
            setTimeout(() => {
              this.route.navigateByUrl('/home');
            }, 1000);
          }
          if(log === 0){
            this.logged = false;
            this.message = 'Login invalid';
          }
        }
      }
    );
  }


}
