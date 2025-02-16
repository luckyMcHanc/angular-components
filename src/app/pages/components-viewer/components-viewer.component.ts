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
listOfAddedValues: any[] = [];
hasSubValues = true;
subValueKeys: any[] = ["subValues", "name"]
listOfElement:any[]=  [
    {
      "name": "Mat Multi Select", "subValues":[{
        "name": "amo",},{
        "name": "Inno"
      }]
    },
    {
      "name": "about","subValues":[{
        "name": "amo",},{
        "name": "Inno"
      }]
    }
  ];

handleEvent(menuItem: string) {
 this.selectedMenu = menuItem
}

changeEvent($event: any){
    this.listOfAddedValues=[...$event];
}
}
