import { TestBed } from '@angular/core/testing';

import { LoaderNService } from './loader-n.service';

describe('LoaderNService', () => {
  let service: LoaderNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
