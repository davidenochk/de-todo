import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { ConnectionBackend, HttpModule } from "@angular/http";
import { LoaderService } from "../components";
import { AccountService, ChttpService, StorageService } from "../services";

describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule,
        RouterTestingModule.withRoutes([])],
      providers: [LoaderService,
        AccountService, ChttpService, ConnectionBackend,
        StorageService]
    });
  });

  it('should ...', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));
});
