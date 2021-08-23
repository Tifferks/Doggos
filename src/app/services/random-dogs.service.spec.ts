import { TestBed } from '@angular/core/testing';

import { RandomDogsService } from './random-dogs.service';

describe('RandomDogsService', () => {
  let service: RandomDogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomDogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
