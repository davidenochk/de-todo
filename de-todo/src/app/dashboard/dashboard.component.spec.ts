import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';
import { MaterialModule } from "@angular/material";
import { ConnectionBackend } from "@angular/http";
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from "./dashboard.service";
import { StatusPipe } from "../pipes/status.pipe";
import { TodoComponent } from "../components/todo/todo.component";
import { LoaderService } from "../components";
import { AccountService, ChttpService, StorageService } from "../services";
import "hammerjs";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, StatusPipe, TodoComponent],
      imports: [
        MaterialModule, FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        DashboardService, LoaderService,
        AccountService, ChttpService, ConnectionBackend,
        StorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
