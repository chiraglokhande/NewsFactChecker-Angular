import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }


  getAll(token:any):Observable<any>
  {
    const header=new HttpHeaders().set("Authorization","Bearer "+token)
   return this.http.get("https://newsfactchecker-backend-production.up.railway.app/user/getall",{headers:header})
  }

   getByUsername(username:any,token:any):Observable<any>
  {
    const header=new HttpHeaders().set("Authorization","Bearer "+token)
    const param=new HttpParams().set("username",username);
   return this.http.get("https://newsfactchecker-backend-production.up.railway.app/user/getByUsername",{params:param,headers:header,responseType:'text'})
  }

  deleteByUsername(username:string,token:any):Observable<any>
  {
    const header=new HttpHeaders().set("Authorization","Bearer "+token)
    const param=new HttpParams().set("username",username);
   return this.http.delete("https://newsfactchecker-backend-production.up.railway.app/user/deleteUser",{params:param,headers:header,responseType:'text'})
  }

  updateUser(user:any,token:any):Observable<any>
  {
        const header=new HttpHeaders().set("Authorization","Bearer "+token)

   return this.http.put("https://newsfactchecker-backend-production.up.railway.app/user/updateUser",user,{headers:header,responseType:'text'})
  }
}
