import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor(private service:UserService,private route:Router){}

  user:any={
    name:'',
    age:'',
    username:'',
    password:'',

  }


  register(){
    this.service.registerUser(this.user).subscribe(res=>
{
  if(res && res.trim()!=='')
  {
this.route.navigate(["/login"])
alert(res)
  }
  else{
    alert("Fill Information Carefully")
  }
}

    );
  }



}
