import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  token:any

generateToken(login: any): Observable<{ jwt: string, role: string }> {
  return this.http.post<{ jwt: string, role: string }>("https://newsfactchecker-backend-production.up.railway.app/authenticate/login", login);
}

setToken(token:any)
{
this.token=token;
}

getToken():Observable<any>
{
  return this.token;
}

registerUser(user:any)
{
  return this.http.post("https://newsfactchecker-backend-production.up.railway.app/authenticate/register",user,{responseType:'text'})
}

factCheck(query: any, token: any): Observable<any> {
  const header = new HttpHeaders().set("Authorization", 'Bearer ' + token);
  const param = new HttpParams().set("query", query);
  return this.http.get("https://newsfactchecker-backend-production.up.railway.app/factcheck/check", { headers: header, params: param });
}
}
