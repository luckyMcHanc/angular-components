import { Component } from '@angular/core';
import { AppComponentsModule } from '../../app-components.module';

@Component({
  selector: 'app-components-viewer',
  standalone:true,
  imports: [AppComponentsModule],
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
