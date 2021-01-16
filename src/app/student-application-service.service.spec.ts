import { TestBed } from '@angular/core/testing';

import { StudentApplicationServiceService } from './student-application-service.service';

describe('StudentApplicationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentApplicationServiceService = TestBed.get(StudentApplicationServiceService);
    expect(service).toBeTruthy();
  });
});
