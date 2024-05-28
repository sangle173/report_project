import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportSriComponent } from './generate-report-sri.component';

describe('GenerateReportSriComponent', () => {
  let component: GenerateReportSriComponent;
  let fixture: ComponentFixture<GenerateReportSriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateReportSriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateReportSriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
