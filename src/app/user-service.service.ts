import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private myclint : HttpClient) { }

  private Base_URL = "http://localhost:3000/users";

  GetAllUsers(){
    return this.myclint.get(this.Base_URL);
  }
  GetUserById(id:any){
    return this.myclint.get(this.Base_URL+"/"+id)
  }
  addUser(user:any){
    return this.myclint.post(this.Base_URL,user)
  }
  updateUser(id:any , newuser:any){
    return this.myclint.put(this.Base_URL+"/"+id , newuser)
  }
  deleteUser(id:any){
    return this.myclint.delete(this.Base_URL+"/"+id);
  }
}
