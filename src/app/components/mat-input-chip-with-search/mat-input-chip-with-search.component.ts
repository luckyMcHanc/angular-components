import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MaterialsModule } from '../../materials/materials.module';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-mat-input-chip-with-search',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './mat-input-chip-with-search.component.html',
  styleUrl: './mat-input-chip-with-search.component.scss'
})
export class MatInputChipWithSearchComponent {
  @Input() listOfValues = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  @Input() searchText = new FormControl();
  @Input() placeholder = "Search";
  @Input() fieldName = "Fill form field";
  listOfAddedValues:any[] = [];
  
  filteredListOfAddedValues:any[] = this.listOfValues.filter(option => 
    !this.listOfAddedValues.includes(option.viewValue.toLowerCase()));


  constructor(private cdr: ChangeDetectorRef){}


  remove(addedValue: any): void {
    const index = this.listOfAddedValues.indexOf(addedValue);
    if (index > -1) {
      this.listOfAddedValues.splice(index, 1);
    }
    this.filteredListOfAddedValues = this.filterUnaddedValues();
  }

  edit(_t9: any,$event: MatChipEditedEvent) {
    
    }
    
    add(event:any, inputField: HTMLInputElement): void {
      const value = event.trim();
      if (value) {
        this.listOfAddedValues.push(value);
      }
      this.filteredListOfAddedValues = this.filterUnaddedValues();
      inputField.value = '';
      this.searchText.setValue('');

    }

    filterList() {
      const searchTerm = this.searchText.value?.trim().toLowerCase() || '';

        this.filteredListOfAddedValues = searchTerm ? this.listOfValues.filter(option => 
          option.viewValue.toLowerCase().includes(searchTerm) && 
          this.listOfValues.filter(option => 
            !this.listOfAddedValues.some(addedValue => addedValue.toLowerCase() === option.viewValue.toLowerCase())
          ) 
        ): this.filterUnaddedValues();
    }

    addOnEnter(event: MatChipInputEvent) {

          const searchTerm = event.value?.trim().toLowerCase() || '';
          if (this.listOfValues.some(food => food.viewValue.toLowerCase() === searchTerm)) {
            this.listOfAddedValues.push(searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1));
          }       
          event.chipInput!.clear();
          this.searchText.setValue('');
          this.filteredListOfAddedValues = this.filterUnaddedValues();
          
      }

      filterUnaddedValues(){
        return this.listOfValues.filter(option => 
          !this.listOfAddedValues.some(addedValue => addedValue.toLowerCase() === option.viewValue.toLowerCase())
        );
      }
}
