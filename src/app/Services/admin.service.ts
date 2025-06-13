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
   return this.http.get("http://localhost:8080/user/getall",{headers:header})
  }

   getByUsername(username:any,token:any):Observable<any>
  {
    const header=new HttpHeaders().set("Authorization","Bearer "+token)
    const param=new HttpParams().set("username",username);
   return this.http.get("http://localhost:8080/user/getByUsername",{params:param,headers:header,responseType:'text'})
  }

  deleteByUsername(username:string,token:any):Observable<any>
  {
    const header=new HttpHeaders().set("Authorization","Bearer "+token)
    const param=new HttpParams().set("username",username);
   return this.http.delete("http://localhost:8080/user/deleteUser",{params:param,headers:header,responseType:'text'})
  }

  updateUser(user:any,token:any):Observable<any>
  {
        const header=new HttpHeaders().set("Authorization","Bearer "+token)

   return this.http.put("http://localhost:8080/user/updateUser",user,{headers:header,responseType:'text'})
  }
}
