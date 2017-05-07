import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";
import { ConnectionBackend } from "@angular/http";
import { MaterialModule, MdDialogRef, MdDialogModule, OverlayRef } from "@angular/material";
import { FormsModule } from '@angular/forms';
import { TodoDialogComponent } from './todo-dialog.component';
import { DEAddTodoComponent } from "../../components/de-add-todo/de-add-todo.component";
import { DashboardService } from "../dashboard.service";
import { LoaderService } from "../../components";
import { AccountService, ChttpService, StorageService } from "../../services";
import "hammerjs";

class MdDialogRefMock {
}

describe('TodoDialogComponent', () => {
  let component: TodoDialogComponent;
  let fixture: ComponentFixture<TodoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoDialogComponent, DEAddTodoComponent],
      imports: [
        MaterialModule.forRoot(), FormsModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule
      ],
      providers: [{
        provide: MdDialogRef, useClass: MdDialogRefMock
      }, DashboardService, LoaderService,
        AccountService, ChttpService, ConnectionBackend,
        StorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
