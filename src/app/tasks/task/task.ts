import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { UserTask } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
@Input({required:true}) task!:UserTask;

constructor(private tasksService: TasksService){}
onCompleteTask(){
  this.tasksService.removeTask(this.task.id);
}
}
