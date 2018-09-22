import { TestBed, inject } from '@angular/core/testing';

import { LeftService } from './left.service';

describe('LeftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftService]
    });
  });

  it('should be created', inject([LeftService], (service: LeftService) => {
    expect(service).toBeTruthy();
  }));
});
