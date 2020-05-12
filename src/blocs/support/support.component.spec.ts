import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportBlocComponent } from './support.component';

describe('SupportBlocComponent', () => {
  let component: SupportBlocComponent;
  let fixture: ComponentFixture<SupportBlocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportBlocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
