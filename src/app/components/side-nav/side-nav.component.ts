import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { AppComponentsModule } from '../../app-components.module';
import e from 'express';
import { MaterialsModule } from '../../materials/materials.module';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  @Input() listOfValues:any[]= [];

  @Output() event = new EventEmitter<string>();


  onClick(eventEmmitted: string) {
      this.event.emit(eventEmmitted);
    }

}
