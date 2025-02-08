import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsViewerComponent } from './components-viewer.component';

describe('ComponentsViewerComponent', () => {
  let component: ComponentsViewerComponent;
  let fixture: ComponentFixture<ComponentsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
