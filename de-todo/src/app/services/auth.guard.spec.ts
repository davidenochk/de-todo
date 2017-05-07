import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from "@angular/router/testing";

import { ConnectionBackend, HttpModule } from "@angular/http";
import { LoaderService } from "../components";
import { AccountService, ChttpService, StorageService } from "../services";

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule,
        RouterTestingModule.withRoutes([])],
      providers: [AuthGuard, LoaderService,
        AccountService, ChttpService, ConnectionBackend,
        StorageService]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
