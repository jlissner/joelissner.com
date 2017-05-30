import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

let id = 0;

@inject(EventAggregator);
export class Dropdown {
	constructor (ea) {
		this.id = id++;
		this.title = 'Dropdown ' + this.id;
		this.text = 'This is my text, etc.';
		this.isOpen = true;
	}

	toggleOpen () {
		this.isOpen = !this.isOpen;
	}
}