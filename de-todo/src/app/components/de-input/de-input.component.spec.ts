import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from "@angular/material";
import { FormsModule } from '@angular/forms';
import { DEInputComponent } from './de-input.component';
import "hammerjs";

describe('DEInputComponent', () => {
  let component: DEInputComponent;
  let fixture: ComponentFixture<DEInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FormsModule],
      declarations: [ DEInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DEInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
