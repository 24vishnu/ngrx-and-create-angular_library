import { TestBed } from '@angular/core/testing';

import { MazicStringService } from './mazic-string.service';

describe('MazicStringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MazicStringService = TestBed.get(MazicStringService);
    expect(service).toBeTruthy();
  });
});
