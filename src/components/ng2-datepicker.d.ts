/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import { ViewContainerRef, EventEmitter, AfterViewInit } from 'angular2/core';
import { NgModel, ControlValueAccessor } from 'angular2/common';
export declare class DatePicker implements ControlValueAccessor, AfterViewInit {
    isOpened: boolean;
    dateValue: string;
    viewValue: string;
    days: Array<Object>;
    dayNames: Array<string>;
    private el;
    private date;
    private viewContainer;
    private onChange;
    private onTouched;
    private cd;
    private cannonical;
    modelFormat: string;
    viewFormat: string;
    initDate: string;
    firstWeekDaySunday: boolean;
    isStatic: boolean;
    changed: EventEmitter<Date>;
    constructor(cd: NgModel, viewContainer: ViewContainerRef);
    ngAfterViewInit(): void;
    openDatepicker(): void;
    closeDatepicker(): void;
    prevYear(): void;
    prevMonth(): void;
    nextYear(): void;
    nextMonth(): void;
    selectDate(e: any, date: any): void;
    private generateCalendar(date);
    isSelected(date: any): boolean;
    private generateDayNames();
    private initMouseEvents();
    private setValue(value);
    private initValue();
    writeValue(value: string): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: (_: any) => {}): void;
    private init();
}
