import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {

  array = []


  constructor(private ds: TodoServiceService) { }

  ngOnInit() {
    this.view()

  }

  view() {
    this.array = this.ds.items
  }


  onChange(event, index){
    // console.log('indexTodo',index);
    this.array.splice(index,1)
    if(this.array.length==0){
      alert("It's the last Task on our Todo list")
    }
  }


}
