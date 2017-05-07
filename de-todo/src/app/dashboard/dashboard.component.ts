import { Component, OnInit } from '@angular/core';
import { DashboardService } from "./dashboard.service";
import { MdDialog, MdSnackBar, MdSnackBarConfig } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { TodoDialogComponent } from "./todo-dialog/todo-dialog.component";
import { Status } from "../enum/status.enum";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  todos: any[];
  todoDrag: any;
  error: any;
  skip: number = 0;
  limit: number = 6;
  showLoadMore: boolean = true;
  constructor(private dashboardService: DashboardService,
    public dialog: MdDialog,
    private snackbar: MdSnackBar) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.dashboardService.getTodos(this.skip, this.limit + 1)
      .subscribe((response: any) => {
        if (response.data.length <= this.limit) {
          this.showLoadMore = false;
        }
        if (response.data.length > this.limit) {
          response.data = response.data.slice(0, response.data.length - 1);
        }
        this.todos = this.todos || [];
        response.data = response.data.filter((rtodo) => {
          return !this.addedTodos.filter((todo) => todo._id === rtodo._id).length;
        })
        this.todos = [...this.todos, ...response.data];
      }, (error) => {
        console.error(error);
      });
  }

  addedTodos: any[] = [];
  onClickAddTodo() {
    this.dialog.open(TodoDialogComponent)
      .afterClosed()
      .subscribe((response: any) => {
        if (response) {
          this.snackbar.open(response.message, 'Okay', {
            duration: 3000
          });
          this.todos = [
            ...this.todos,
            response.todo
          ];
          this.addedTodos.push(response.todo);
        }
      });
  }

  loadMore() {
    this.skip = this.skip + this.limit;
    this.getTodos();
  }

  doneTodo(todo: any) {
    todo.status = Status[Status.completed];
    this.updateTodo(todo);
  }

  dragNC(event: any) {
    //do animations
    const id = event.target.attributes.id.value;
    this.todoDrag = this.todos.filter((todo) => id == todo._id)[0];
    this.todoDrag.moving = true;
    event.dataTransfer.setData('todo', JSON.stringify({ id: id, status: Status[Status.notCompleted] }));
  }

  dragC(event: any) {
    //do animations
    const id = event.target.attributes.id.value;
    this.todos.filter((todo) => id == todo._id)[0].moving = true;
    event.dataTransfer.setData('todo', JSON.stringify({ id: id, status: Status[Status.completed] }));
  }

  dragEnd(event: any) {
    this.dropNotCompleted = false;
    this.dropCompleted = false;
    const id = event.target.attributes.id.value;
    this.todos.filter((todo) => id == todo._id)[0].moving = false;
  }

  dropCompleted: boolean = false;
  dropNotCompleted: boolean = false;
  allowDrop(event: any, status: string) {
    if (status == Status[Status.completed]) {
      this.dropCompleted = true;
      this.dropNotCompleted = false;
    } else {
      this.dropCompleted = false;
      this.dropNotCompleted = true;
    }
    event.preventDefault();
    //do animations
  }

  drop(event: any, targetState: string) {
    const { id, status } = JSON.parse(event.dataTransfer.getData('todo'));
    if (status != Status[Status[targetState]]) {
      const todo = this.todos.filter((todo) => {
        if (todo._id == id)
        { todo.status = Status[Status[targetState]]; return true; }
      });
      event.preventDefault();
      this.updateTodo(todo[0]);
    }
  }

  updateTodo(todo: any) {
    this.dashboardService.updateTodo(todo)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          response.data.mode = 'View';
          this.todos = this.todos.map((todo) => {
            if (todo._id == response.data._id) {
              return {
                ...response.data,
                author: todo.author
              }
            } else return todo;
          });

          this.snackbar.open('Successfully updated', 'Okay', {
            duration: 2000
          });
        }
      }, (error) => {
        this.snackbar.open(error.message, 'Okay', {
          duration: 2000
        });
      })
  }

  deleteTodo(_todo: any) {
    this.dashboardService.deleteTodo(_todo)
      .subscribe((response: any) => {
        if (response.status == 'success') {
          _todo.deleting = true;
          setTimeout(() => {
            this.todos = this.todos.filter((todo) => {
              return todo._id !== _todo._id;
            });
          }, 900);
        }
        this.snackbar.open('Successfully deleted', 'Okay', {
          duration: 2000
        });
      }, (err) => {
        this.snackbar.open(err.data, 'Okay', {
          duration: 2000
        });
      })
  }

  notCompleted() {
    return Status[Status.notCompleted];
  }

  completed() {
    return Status[Status.completed];
  }

}
