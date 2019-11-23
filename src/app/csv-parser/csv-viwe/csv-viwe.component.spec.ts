import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvViweComponent } from './csv-viwe.component';

describe('CsvViweComponent', () => {
  let component: CsvViweComponent;
  let fixture: ComponentFixture<CsvViweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvViweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvViweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
