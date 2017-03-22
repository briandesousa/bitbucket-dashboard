import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { StatisticComponent } from './statistic.component';

describe('StatisticComponent', () => {

    let component : StatisticComponent;
    let fixture : ComponentFixture<StatisticComponent>;
    let debugElement : DebugElement;
    let element : HTMLElement;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                StatisticComponent
            ]
        });
        fixture = TestBed.createComponent(StatisticComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.css('div'));
        element = debugElement.nativeElement;
    });

    it('should create an empty div', (() => {
        fixture.detectChanges();
        expect(element.textContent.trim().length).toEqual(0);
    }));

    it('should contain a statistic with a value and statement', (() => {
        component.value = "12345";
        component.statement = "test";
        fixture.detectChanges();
        expect(element.textContent).toContain("12345");
        expect(element.textContent).toContain("test");
    }));
});