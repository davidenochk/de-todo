import { TestBed, inject } from '@angular/core/testing';

import { RouterTestingModule } from "@angular/router/testing";
import { ConnectionBackend, RequestOptions, HttpModule } from "@angular/http";
import { DashboardService } from './dashboard.service';
import { LoaderService } from "../components";
import { AccountService, ChttpService, StorageService } from "../services";

describe('DashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule,
        RouterTestingModule.withRoutes([])],
      providers: [
        DashboardService, LoaderService,
        AccountService, ChttpService, ConnectionBackend,
        StorageService]
    });
  });

  it('should ...', inject([DashboardService], (service: DashboardService) => {
    expect(service).toBeTruthy();
  }));
});
