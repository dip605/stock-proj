import { TestBed, inject } from '@angular/core/testing';

import { ApiCallingService } from './api-calling.service';

describe('ApiCallingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCallingService]
    });
  });

  it('should be created', inject([ApiCallingService], (service: ApiCallingService) => {
    expect(service).toBeTruthy();
  }));
});
