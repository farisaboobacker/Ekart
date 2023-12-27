import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  Data:any;
  constructor(protected http:HttpClient) {

  }

   base_url:any="https://beyont.in/angularapi/";
  getData(){
    return this.http.get(`${this.base_url}getuser.php`);
  }

  addUser(params:any){
    return this.http.get(`${this.base_url}registration.php`,{params});
  }
   Email:any;
   getone(email:any){
    console.log(email);
    return this.http.get(`${this.base_url}getuserbyid.php?email=${email}`);
  }

  update(params:any){
    return this.http.get(`${this.base_url}updateuser.php`,{params});
   }

  deleteUser(id:any){
    return this.http.get(`${this.base_url}deleteuser.php?id=${id}`);
  }
}
