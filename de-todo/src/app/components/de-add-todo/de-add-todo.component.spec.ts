import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from "@angular/material";
import { FormsModule } from '@angular/forms';
import { ConnectionBackend } from "@angular/http";
import { Router } from "@angular/router";

import { DEAddTodoComponent } from './de-add-todo.component';
import { DashboardService } from "../../dashboard/dashboard.service";
import { LoaderService } from "../../components";
import { AccountService, ChttpService, StorageService } from "../../services";
import "hammerjs";

describe('DEAddTodoComponent', () => {
  let component: DEAddTodoComponent;
  let fixture: ComponentFixture<DEAddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DEAddTodoComponent],
      imports: [MaterialModule, FormsModule,
        RouterTestingModule.withRoutes([])],
      providers: [
        DashboardService, LoaderService,
        AccountService, ChttpService, ConnectionBackend,
        StorageService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(DEAddTodoComponent);
  }));

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
