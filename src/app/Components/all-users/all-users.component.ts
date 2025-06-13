import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  constructor(private service:AdminService,private userService:UserService){}
 token:any
  ngOnInit(): void {
      this.token = localStorage.getItem('token');
    this.getAll(this.token);
    console.log(this.token);
    
  }
users:any[]=[]

getAll(token:any)
{
  this.service.getAll(token).subscribe(res=>{
  this.users=res
  }
  )
}

editUser(id:any)
{

}

deleteUser(username:any)
{
this.service.deleteByUsername(username,this.token).subscribe(res=>
{
  alert(res);
  window.location.reload();
  }
)
}

}
