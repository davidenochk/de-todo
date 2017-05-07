import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'de-input',
  templateUrl: './de-input.component.html',
  styleUrls: ['./de-input.component.scss']
})
export class DEInputComponent implements OnInit {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() class: string = '';

  constructor() { }

  ngOnInit() {
  }

}
