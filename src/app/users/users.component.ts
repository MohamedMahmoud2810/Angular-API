import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  constructor(public myservice : UserServiceService){}
  users:any;
  id:any;
  ngOnInit(): void {
    // this.myservice.GetAllUsers().subscribe(
    //   (data)=>{console.log(data);},
    //   (err)=>{console.log(err);
    //   }
    // );
    
    this.myservice.GetAllUsers().subscribe(
      {
        next: (data)=>{
          this.users=data;
        },
        error: (err)=>{
          console.log(err);

        },
      }
    );

  }
  delete(){
    this.myservice.deleteUser(this.id).subscribe(
      {
        next:()=>{

        }
      }
    )
  }
}

