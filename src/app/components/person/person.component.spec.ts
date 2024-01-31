import { TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';

describe('EmployeeService', () => {
  let service: PersonComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
