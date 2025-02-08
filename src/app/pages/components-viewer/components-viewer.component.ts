import { Component } from '@angular/core';
import { AppComponentsModule } from '../../app-components.module';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { MatSelectWithSearchComponent } from "../../components/mat-select-with-search/mat-select-with-search.component";

@Component({
  selector: 'app-components-viewer',
  standalone:true,
  imports: [SideNavComponent, MatSelectWithSearchComponent],
  templateUrl: './components-viewer.component.html',
  styleUrl: './components-viewer.component.scss'
})
export class ComponentsViewerComponent {

selectedMenu!: string;
listOfElement:any[]=  [
    {
      "name": "Mat Multi Select", "url":"#"
    },
    {
      "name": "about", "url":"#"
    }
  ];

handleEvent(menuItem: string) {
 this.selectedMenu = menuItem
}
}
