import { Component, computed, EventEmitter, Input,input,  Output,  signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { Card } from "../shared/card/card";

const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
// type User={
//   id:string;
//   avatar:string;
//   name:string;
// };
@Component({
  selector: 'app-user',
  standalone:true,
  imports: [Card],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //signals
//  selectedUser= signal(DUMMY_USERS[randomIndex]);
//  imagePath=computed(()=>'assets/users/'+this.selectedUser().avatar);

 //getter 
//  get imagePath(){
//   return 'assets/users/'+this.selectedUser().avatar;
//  }
// @Input({required:true}) id!:string;
// @Input({required:true}) avatar!:string;
// @Input({required:true}) name!:string;
@Input({required:true}) user!:User;
@Input({required:true}) selected!: boolean;
@Output() select=new EventEmitter<string>();

//accept input using signals i.e. using input
// avatar=input.required<string>();
// name=input.required<string>();
// imagePath=computed(()=>{
//   return 'assets/users/'+this.avatar();
// });
get imagePath(){
  return 'assets/users/'+this.user.avatar;
}

 onSelectUser(){
  // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
  // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  this.select.emit(this.user.id);
 }
}
