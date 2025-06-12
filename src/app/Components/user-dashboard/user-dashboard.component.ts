import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { LoginComponent } from '../login/login.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  constructor(private service:UserService){}

query:any;
token:any;

Claims:any=null
  searchFact() {
    const token = this.service.getToken(); // ✅ Synchronous
    if (!token) {
      console.error("Token is missing!");
      return;
    }

    this.service.factCheck(this.query, token).subscribe(res => {
      this.Claims = res;
      console.log(res);
    }, err => {
      console.error("Error:", err);
    });
  }

  

}
