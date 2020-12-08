import { TestBed } from '@angular/core/testing';

import { BackbaseService } from './backbase.service';

describe('BackbaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackbaseService = TestBed.get(BackbaseService);
    expect(service).toBeTruthy();
  });
});
