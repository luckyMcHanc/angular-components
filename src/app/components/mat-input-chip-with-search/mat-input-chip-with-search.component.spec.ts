import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputChipWithSearchComponent } from './mat-input-chip-with-search.component';

describe('MatInputChipWithSearchComponent', () => {
  let component: MatInputChipWithSearchComponent;
  let fixture: ComponentFixture<MatInputChipWithSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputChipWithSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatInputChipWithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
