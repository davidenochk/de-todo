import { Pipe, PipeTransform } from '@angular/core';
import { Status } from "../enum/status.enum";

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(todos: any[], args?: any): any {
    if (todos) {
      return todos.filter((todo) => {
        return (todo.status || 'notCompleted') == args
      });
    } else return [];
  }

}
