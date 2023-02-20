import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

    constructor(public myservice:UserServiceService){}
  add(name:any,age:any,phone:any){
    let newuser = {name,age,phone};
    this.myservice.addUser(newuser).subscribe();

  }
}
