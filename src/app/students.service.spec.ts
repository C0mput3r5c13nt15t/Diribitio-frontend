import { TestBed } from '@angular/core/testing';

import { StudentsService } from './students.service';

describe('ParticipantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // tslint:disable-next-line: deprecation
    const service: StudentsService = TestBed.get(StudentsService);
    expect(service).toBeTruthy();
  });
});
