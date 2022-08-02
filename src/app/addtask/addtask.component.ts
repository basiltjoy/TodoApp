import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  Task: any;
  Personal:any;

  constructor(private ds: TodoServiceService) { }

  ngOnInit() {
  }

  addToList() {
    this.ds.items.push(this.Task)
    this.Task = ''
  }


}
