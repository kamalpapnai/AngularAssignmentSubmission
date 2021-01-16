import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.interface'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:User[] = [
    {
      name:"Arnav gupta",
      username:"@gupta_arnav",
      email:"arnavgupta@nagarro.com"

  },
  {
    name:"Kamal papnai",
    username:"@papnaikamal",
    email:"kamalpapnai@nagarro.com"

},
{
  name:"Shanvi Sharma",
  username:"@shanviSharma",
  email:"shanvisharma@nagarro.com"

},
{
  name:"Krishna Mohan",
  username:"@KrishnaMohan",
  email:"mohanKrishna@nagarro.com"

},
{
  name:"Sanam Puri",
  username:"@snamaPuri",
  email:"sanammusic@nagarro.com"

},
{
  name:"Ram Joshi",
  username:"@ramJoshi",
  email:"ramjoshi@nagarro.com"

}]

  constructor() { }

  ngOnInit(): void {
  }

  deleteAllUsers()
  {
    this.users =[];
  }

}
