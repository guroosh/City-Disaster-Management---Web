import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDisasterComponent } from './report-disaster.component';

describe('ReportDisasterComponent', () => {
  let component: ReportDisasterComponent;
  let fixture: ComponentFixture<ReportDisasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDisasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDisasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
