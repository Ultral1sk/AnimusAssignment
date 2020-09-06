import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularFormComponent } from './formular-form.component';

describe('FormularFormComponent', () => {
  let component: FormularFormComponent;
  let fixture: ComponentFixture<FormularFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
