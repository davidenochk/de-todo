import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { ConnectionBackend, HttpModule } from "@angular/http";
import { LoaderService } from "../components";
import { AccountService, ChttpService, StorageService } from "../services";

describe('ChttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,
        RouterTestingModule.withRoutes([])],
      providers: [ChttpService, ConnectionBackend, LoaderService]
    });
  });

  it('should ...', inject([ChttpService], (service: ChttpService) => {
    expect(service).toBeTruthy();
  }));
});
