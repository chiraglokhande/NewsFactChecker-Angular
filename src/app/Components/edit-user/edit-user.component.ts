import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {


constructor(private service:AdminService,private route:ActivatedRoute){}

user:any={
name:'',
age:'',
username:'',
password:''
}


ngOnInit():void
{
const username=this.route.snapshot.paramMap.get('username');
const token=localStorage.getItem('token');
this.service.getByUsername(username,token).subscribe(res=>{
 
  
  this.user=JSON.parse(res)
  

}
  
)

}


updateUser()
{
  const token=localStorage.getItem('token');
  this.service.updateUser(this.user,token).subscribe(res=>{
    alert(res)
    window.location.reload()
  }
  )
}


}
