import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss']
})
export class TodoDialogComponent implements OnInit {
  error: any;
  todo: any = {
    title: '',
    description: '',
    status: ''
  };

  config: any = this.dialogRef._containerInstance ? this.dialogRef._containerInstance.dialogConfig : {};

  constructor(public dialogRef: MdDialogRef<TodoDialogComponent>) { }

  ngOnInit() {
  }

  addedTodo(event: any){
    this.dialogRef.close(event);
  }

  cancel() {
    this.dialogRef.close();
  }
}
