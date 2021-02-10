import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';
import { Task } from '../model/task.model';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

public taskList : Task [] =[];

addTask(){
  this.taskList.push(new Task()); 
}

removeTask(index:number){
  if(index > -1){
    this.taskList.splice(index, 1);
  }
}

}
