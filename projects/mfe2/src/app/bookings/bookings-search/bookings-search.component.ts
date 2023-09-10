import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookings-search',
  templateUrl: './bookings-search.component.html'
})
export class BookingsSearchComponent {
  constructor() { }

  search() {
    alert('Not implemented for this demo!');
  }
}
