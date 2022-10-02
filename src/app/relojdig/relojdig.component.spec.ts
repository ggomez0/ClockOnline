import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojdigComponent } from './relojdig.component';

describe('RelojdigComponent', () => {
  let component: RelojdigComponent;
  let fixture: ComponentFixture<RelojdigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelojdigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojdigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
