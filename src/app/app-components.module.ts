import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectWithSearchComponent } from './components/mat-select-with-search/mat-select-with-search.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatInputChipWithSearchComponent } from './components/mat-input-chip-with-search/mat-input-chip-with-search.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideNavComponent,
    MatSelectWithSearchComponent,
    MatInputChipWithSearchComponent
  ],
  exports:[
    SideNavComponent,
    MatSelectWithSearchComponent,
    MatInputChipWithSearchComponent
  ]
})
export class AppComponentsModule { }
