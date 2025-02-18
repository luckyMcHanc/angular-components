import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialsModule } from '../../materials/materials.module';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';

export class ItemList {
  constructor(
    public item: string, 
    public subItem: {name: string, selected?: boolean},
    public selected?: boolean
  
  ) {
    if (selected === undefined) selected = false;
  }
}

@Component({
  selector: 'app-mat-input-chip-with-search',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './mat-input-chip-with-search.component.html',
  styleUrl: './mat-input-chip-with-search.component.scss'
})
export class MatInputChipWithSearchComponent {

  _listOfAddedValues:any[] = [];
  private _listOfValues:any[] = [];

  @Input() set listOfAddedValues(values: any[]){
    this._listOfAddedValues = values
  }
  

  filteredListOfAddedValues:any[] = [];
  @Input({ required: true}) set listOfValues(values: any[]){
    this._listOfValues= values;
    this.filteredListOfAddedValues = values.filter(option => 
      !this._listOfAddedValues.includes(option[this.key].toLowerCase()));
  };
  @Input() searchText = new FormControl();
  @Input() placeholder = "Search";
  @Input({ required: true}) label = "Fill form field";
  @Input({ required: true}) id!: string;
  @Input({ required: true}) key!: string;
  @Output() changeEvent = new EventEmitter<any[]>();
  @Input() hasSubValues:boolean = false;
  @Input() subValueKeys: any[] = []

  remove(addedValue: any): void {
    const index = this._listOfAddedValues.indexOf(addedValue);
    if (index > -1) {
      this._listOfAddedValues.splice(index, 1);
    }
    this.filteredListOfAddedValues = this.filterUnaddedValues();
    this.eventEmit();
  }


  eventEmit(){
    this.changeEvent.emit([...this._listOfAddedValues]);
  }
    
  add(event:any, inputField: HTMLInputElement): void {
    const value = event.trim();
    if (value && !this._listOfAddedValues.includes(value)) {
      this._listOfAddedValues.push(value);
    }
    this.filteredListOfAddedValues = this.filterUnaddedValues();
    inputField.value = '';
    this.searchText.setValue('');
    this.eventEmit();
  }

  filterList() {
    const searchTerm = this.searchText.value?.trim().toLowerCase() || '';

    this.filteredListOfAddedValues = searchTerm ? this._listOfValues.filter(option => 
      option[this.key].toLowerCase().includes(searchTerm) && 
      this._listOfValues.filter(option => 
        !this._listOfAddedValues.some(addedValue => addedValue.toLowerCase() === option[this.key].toLowerCase())
      ) 
    ): this.filterUnaddedValues();
  }

  addOnEnter(event: MatChipInputEvent) {

        const searchTerm = event.value?.trim().toLowerCase() || '';
        if (!this.hasSubValues &&
           (this._listOfValues.some(option => option[this.key].toLowerCase() === searchTerm) &&
            !this._listOfAddedValues.includes(searchTerm))) {
          this._listOfAddedValues.push(searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1));
        }       
        event.chipInput!.clear();
        this.searchText.setValue('');
        this.filteredListOfAddedValues = this.filterUnaddedValues();
        this.eventEmit();
    }

    filterUnaddedValues(){
      return this._listOfValues.filter(option => 
        !this._listOfAddedValues.some(addedValue => addedValue.toLowerCase() === option[this.key].toLowerCase())
      );
    }

    isSelected(value:any): boolean {
      return this._listOfAddedValues.some(addedValue => addedValue.toLowerCase() === value.toLowerCase())
    }

    toggleSelection(item:any) {
      item.selected = !item.selected;
      if (item.selected) {
        this._listOfAddedValues.push(item);
      } else {
        const i = this._listOfAddedValues.findIndex(value => value.item === item.item );
        this._listOfAddedValues.splice(i, 1);
      }
  
    }

    onOptionSelected(event: MatAutocompleteSelectedEvent, autoCompleteTrigger: MatAutocompleteTrigger) {
      // event.option._getHostElement().click(); // Ensures selection
      // event.option._getHostElement().focus(); // Keeps the input focused
      // autoCompleteTrigger. openPanel();
      setTimeout(() => autoCompleteTrigger.openPanel(), 0); // Reopen dropdown after selection
    }
}
