import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentRegistrationComponent } from './create-student-registration.component';

describe('CreateStudentRegistrationComponent', () => {
  let component: CreateStudentRegistrationComponent;
  let fixture: ComponentFixture<CreateStudentRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStudentRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
