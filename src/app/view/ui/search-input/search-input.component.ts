import { 
    Component, 
    SimpleChanges, 
    Input,
    Output,
    EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
    searchValue;
    resultOfSearch = [];

    @Input() searchList = []; 
    @Input() keySearchString;
    @Output() search = new EventEmitter<any>();

    searchData(value) {
        this.resultOfSearch = this.searchList.filter(item => {
            return item[this.keySearchString].includes(value);
        })
        this.search.emit(this.resultOfSearch);
    }  
}
 