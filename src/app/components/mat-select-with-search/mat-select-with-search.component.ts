import { Component } from '@angular/core';
import { MaterialsModule } from '../../materials/materials.module';
import { FormBuilder, FormControl } from '@angular/forms';
import { AppComponentsModule } from '../../app-components.module';



@Component({
  selector: 'app-mat-select-with-search',
  standalone: true,
  imports: [AppComponentsModule],
  templateUrl: './mat-select-with-search.component.html',
  styleUrl: './mat-select-with-search.component.scss'
})
export class MatSelectWithSearchComponent {


  searchText = new FormControl();
  selectFormControl = new FormControl();
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  filteredFoods = [...this.foods];

  filterOptions() {
    this.filteredFoods = this.foods.filter(food =>
      food.viewValue.toLowerCase().includes(this.searchText.value.toLowerCase())
    );
  }

  opened() {
    this.searchText.patchValue('');
    this.filterOptions();
}

}
