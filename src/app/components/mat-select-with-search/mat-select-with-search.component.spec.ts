import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectWithSearchComponent } from './mat-select-with-search.component';

describe('MatSelectWithSearchComponent', () => {
  let component: MatSelectWithSearchComponent;
  let fixture: ComponentFixture<MatSelectWithSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSelectWithSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatSelectWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
