import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from "@angular/router/testing";
import { LoginComponent } from './login.component';
import { MaterialModule } from "@angular/material";
import { FormsModule } from '@angular/forms';
import { ConnectionBackend } from "@angular/http";
import { LoaderService } from "../components";
import { AccountService, ChttpService, StorageService, AuthService } from "../services";
import "hammerjs";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [MaterialModule, FormsModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule],
      providers: [
        LoaderService, AuthService,
        AccountService, ChttpService, ConnectionBackend,
        StorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
