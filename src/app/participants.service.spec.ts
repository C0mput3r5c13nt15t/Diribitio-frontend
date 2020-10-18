import { TestBed } from '@angular/core/testing';

import { ParticipantsService } from './participants.service';

describe('ParticipantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // tslint:disable-next-line: deprecation
    const service: ParticipantsService = TestBed.get(ParticipantsService);
    expect(service).toBeTruthy();
  });
});
