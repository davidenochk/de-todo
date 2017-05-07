import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from "@angular/material";
import { ConnectionBackend } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent, LoaderService } from "./components";
import { StorageService, AccountService, ChttpService, AuthService } from "./services";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      providers: [
        StorageService,
        AccountService,
        ChttpService, 
        ConnectionBackend,
        LoaderService,
        AuthService
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
