import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoaderService {
  public loader = {
    count: 0
  }

  constructor() { }
  get() {
    return this.loader;
  }
  inc() {
    this.loader.count++;
  }
  dec() {
    this.loader.count--;
  }
  reset() {
    this.loader.count = 0;
  }

}
