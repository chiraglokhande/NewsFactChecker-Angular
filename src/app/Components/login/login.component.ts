import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:UserService , private router:Router){}

token:any;

login:any={
username:'',
password:''
}

getToken() {
  this.service.generateToken(this.login).subscribe(res => {
    if (res && res.trim() !== '') {
            this.token = res;
            console.log(res);

            this.service.setToken(res);
     this.router.navigate(['/user-dashboard']);

    } else {
      alert("Incorrect Credentials..");
    }
  });
}

}
