import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISearchForm } from 'src/app/Core/Interface/IWeatherDataInterfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() searchValue = new EventEmitter<string>();

  searchForm = new FormGroup({
    searchInput: new FormControl('', Validators.required),
  });

  onSubmit() {
    const SearchForm: ISearchForm = this.searchForm.value;
    this.searchValue.emit(SearchForm.searchInput);
    //this.searchForm.value.searchInput
  }
}
