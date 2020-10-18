import { TestBed } from '@angular/core/testing';

import { ScreensizeService } from './screensize.service';

describe('ScreensizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScreensizeService = TestBed.inject(ScreensizeService);
    expect(service).toBeTruthy();
  });
});
