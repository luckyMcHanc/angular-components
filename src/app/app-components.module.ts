import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectWithSearchComponent } from './components/mat-select-with-search/mat-select-with-search.component';
import { MaterialsModule } from './materials/materials.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsModule,
    SideNavComponent,
  ],
  exports:[
    MaterialsModule,
    SideNavComponent
  ]
})
export class AppComponentsModule { }
