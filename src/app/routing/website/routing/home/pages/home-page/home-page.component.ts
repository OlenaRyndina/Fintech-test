import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements DoCheck {
    paramsOfSearch;
    constructor(
        private activateRoute: ActivatedRoute) {}

    ngDoCheck(): void {
        this.paramsOfSearch = this.activateRoute.snapshot.queryParams['type'];
    }
} 
