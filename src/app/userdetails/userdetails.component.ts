import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit{
  id=0;
  user:any;
  constructor(myActivated:ActivatedRoute , public myservice:UserServiceService){
    this.id = myActivated.snapshot.params['id'];
    }
  ngOnInit(): void {
    this.myservice.GetUserById(this.id).subscribe(
      {
        next:(data)=>{

          this.user=data;

        }

      }
    );
  }
}
