import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DashboardService } from "../../dashboard/dashboard.service";
import { Status } from "../../enum/status.enum";
import { AccountService } from "../../services/account.service";

@Component({
  selector: 'de-add-todo',
  templateUrl: './de-add-todo.component.html',
  styleUrls: ['./de-add-todo.component.scss']
})
export class DEAddTodoComponent implements OnInit {
  @Input() todo: any = {
    title: '',
    description: '',
    status: Status[Status.notCompleted]
  }
  @Output() addedTodo = new EventEmitter();

  constructor(private dashboardService: DashboardService,
  private account: AccountService) { }

  ngOnInit() {
  }

  addTodo() {
    this.todo.status = Status[Status.notCompleted];
    console.log(this.todo);
    this.dashboardService.addTodo(this.todo)
      .subscribe((response) => {
        const todo = {
          title: response.data.title,
          description: response.data.description,
          author: {
            _id: response.data.author,
            username: this.account.user.username
          },
          status: Status[Status.notCompleted],
          _id: response.data._id
        }
        const message = 'Todo added successfully';
        this.addedTodo.emit({
          todo: todo,
          message: message
        });
      }, (err) => {
        console.log(err);
      });
  }

}
