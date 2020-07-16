import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
users: Observable<any>;
id:string;
  constructor(private ser:UserService, private router:Router) { }

  ngOnInit() {

    this.users= this.ser.getUsers();
    console.log('userssss',this.users);
  }

  delete_user(){

    console.log('user id',this.id);
    this.ser.delete_user(this.id).subscribe(res=>{ 

      if (!res.errors){
        this.router.navigate(["/users"]);

      }else{
        console.log(res.errors)
      }
      
    
    },err => console.log('HTTP Error', err),
    () => console.log('HTTP request completed.'))
      
    
  }


 



}
