import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { NavigateService } from './navigate.service';

describe('NavigateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([])],
      providers: [NavigateService]
    });
  });

  it('should ...', inject([NavigateService], (service: NavigateService) => {
    expect(service).toBeTruthy();
  }));
});
