import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    public users: Array<any> = [
        {
            name: 'John',
            age: 21,
            about: 'I thought being an adult meant knowing what you believe, but that has not been my experience.'
        },
        {
            name: 'Bob',
            age: 23,
            about: 'The point of living and of being an optimist, is to be foolish enough to believe the best is yet to come.'
        },
        {
            name: 'Mr. Nice',
            age: 19,
            about: 'Mothers may still want their sons to grow up to be President, but according to a famous Gallup poll of some years ago.'
        }
    ]

    constructor() {

    }
}