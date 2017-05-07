import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Status } from "../../enum/status.enum";
import { AccountService } from "../../services/account.service";
import { MdSnackBar } from "@angular/material";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: any;
  @Input() mode: string = 'View';
  @Output() deleteTodo: EventEmitter<any> = new EventEmitter();
  @Output() doneTodo: EventEmitter<any> = new EventEmitter();
  @Output() saveTodo: EventEmitter<any> = new EventEmitter();
  constructor(private account: AccountService,
    private snackbar: MdSnackBar) { }

  ngOnInit() {
  }

  onClickDeleteTodo(todo: any) {
    this.deleteTodo.emit(todo);
  }

  onClickSaveTodo(todo: any) {
    this.saveTodo.emit(todo);
  }

  done() {
    this.doneTodo.emit(this.todo);
  }

  onDoubleClick() {
    if (this.todo.author.username == this.account.user.username) {
      this.mode = 'Edit';
    } else {
      this.snackbar.open('You are not the owner of this item', 'Okay', {
        duration: 2000
      })
    }
  }

  IsAdd() {
    return this.mode == 'Add';
  }

  IsView() {
    return this.mode == 'View';
  }

  IsEdit() {
    return this.mode == 'Edit';
  }

  completed() {
    return Status[Status.completed];
  }

}
