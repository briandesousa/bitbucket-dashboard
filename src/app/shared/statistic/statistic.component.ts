import { Component, Input } from '@angular/core';

@Component({ 
    selector: 'statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.css']
})
export class StatisticComponent {

    @Input() value : String;
    @Input() statement : String;
}