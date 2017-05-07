import { Injectable } from '@angular/core';
import { ChttpService } from "../services/chttp.service";
import { AccountService } from "../services/account.service";

@Injectable()
export class DashboardService {

  constructor(private account: AccountService,
    private http: ChttpService) { }

  getTodos(skip?: number, limit?: number) {
    return this.http.get(`todos?sessionId=${this.account.user.sessionId}`, {
      params: {
        skip: skip,
        limit: limit
      }
    })
  }

  addTodo(todo: any) {
    return this.http.put(`todo?sessionId=${this.account.user.sessionId}`, todo);
  }

  updateTodo(todo: any){
    todo.id = todo._id;
    if(todo.author.username !== this.account.user.username){
      todo.title = undefined;
      todo.description = undefined;
    } 
    return this.http.put(`todo?sessionId=${this.account.user.sessionId}`, todo);
  }

  deleteTodo(todo: any){
    console.log(todo);
    return this.http.delete(`todo?sessionId=${this.account.user.sessionId}`, {
      body: {
        id: todo._id
      }
    });
  }

}
