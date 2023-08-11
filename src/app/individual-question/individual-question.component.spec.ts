import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualQuestionComponent } from './individual-question.component';

describe('IndividualQuestionComponent', () => {
  let component: IndividualQuestionComponent;
  let fixture: ComponentFixture<IndividualQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualQuestionComponent]
    });
    fixture = TestBed.createComponent(IndividualQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
