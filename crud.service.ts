import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';




@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private _http:Http) { }
  login(data){
    return this._http.post("http://localhost:8089/user/saveuser",data)
    .map(()=>"");
  }
  register(data){
    return this._http.post("http://localhost:8089/user/saveuser",data)
      .map(()=>"");
  }
  checkMe:any;
  getUsers(){
    return this._http.get("http://localhost:8089/user/getUserList")
     /*  .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        } */
        .map(res=>res.json());
      
  }
  getSingleEmployee(id){
    console.log("you requested for search by name for"+id);
    return this._http.get("http://localhost:8089/user/getUserList")
     .map(res=>res.json());
     // .map((res:Response)=>{return res.json()});
  }


  deleteEmployee(id){
    return this._http.get("http://localhost:8089/user/getUserList/")
      .map(()=>this.getUsers());
  }
   updateEmployee(info){
    return this._http.post("http://localhost:8089/user/saveuser", info)
      .map(()=>"");
  } 
}
