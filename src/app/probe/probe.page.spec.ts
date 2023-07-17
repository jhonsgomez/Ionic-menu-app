import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProbePage } from './probe.page';

describe('ProbePage', () => {
  let component: ProbePage;
  let fixture: ComponentFixture<ProbePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProbePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
