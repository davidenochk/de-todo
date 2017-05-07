import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { ConnectionBackend, HttpModule } from "@angular/http";
import { LoaderService } from "../components";
import { AuthService, AccountService, ChttpService, StorageService } from "../services";

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,
        RouterTestingModule.withRoutes([])],
      providers: [AuthService, AccountService, ChttpService, StorageService, LoaderService, ConnectionBackend]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
