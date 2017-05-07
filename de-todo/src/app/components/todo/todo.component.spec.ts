import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from "@angular/material";
import { ConnectionBackend } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { TodoComponent } from './todo.component';
import { AuthService, AccountService, ChttpService, StorageService } from "../../services";
import { LoaderService } from "../../components";
import "hammerjs";

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      imports: [FormsModule, MaterialModule,
        RouterTestingModule.withRoutes([])],
      providers: [AccountService, ChttpService, ConnectionBackend, LoaderService, StorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
