import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Essentials';
  users=DUMMY_USERS;

  selectedUserName:string='';
  selectedUserId?:string;

  get selectedUser(){
    return this.users.find((user)=>user.id==this.selectedUserId);
  }
  onSelectUser(id:string){
    this.selectedUserId=id;
    this.selectedUserName=DUMMY_USERS.find(users=>users.id==id)?.name??'';
    console.log('Selected user with id '+id);
  }
}
