import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  currentuser:any;
  id:any;
  constructor(public myservice:UserServiceService , public route:ActivatedRoute , public router:Router){}
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];

    this.myservice.GetUserById(this.id).subscribe(
      {
        next: (data)=>{
          this.currentuser=data;
        },
        error:()=>{

        }
      }
    );
  }

  update(name:any,age:any,phone:any){
    let newUser={name,age,phone}
    this.myservice.updateUser(this.id,newUser).subscribe(
      {
        next:(data)=>{

          this.router.navigateByUrl('users');
        },
        error:()=>{
          console.log('error');

        }
      }
    );
  }
}
