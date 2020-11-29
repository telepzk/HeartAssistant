import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondentsListComponent } from './respondents-list.component';

describe('RespondentsListComponent', () => {
  let component: RespondentsListComponent;
  let fixture: ComponentFixture<RespondentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
