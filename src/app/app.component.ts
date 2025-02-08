import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsViewerComponent } from './pages/components-viewer/components-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ComponentsViewerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-components';
}
