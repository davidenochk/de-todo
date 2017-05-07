import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectionBackend } from "@angular/http";
import { MaterialModule } from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { HeaderComponent } from './header.component';
import { AuthService, AccountService, ChttpService, StorageService } from "../../services";
import { LoaderService } from "../../components";
import "hammerjs";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,
        RouterTestingModule.withRoutes([])],
      declarations: [HeaderComponent],
      providers: [AuthService, AccountService, ChttpService, ConnectionBackend, LoaderService, StorageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
