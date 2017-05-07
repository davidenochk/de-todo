import { Component, OnInit } from '@angular/core';
import { LoaderService } from "./loader.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loader: any;
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loader = this.loaderService.get();
  }

}
