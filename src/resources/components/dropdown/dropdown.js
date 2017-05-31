import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

let id = 0;

@inject(EventAggregator, Element)
export class Dropdown {
	constructor(ea, elem) {
		this.elem = elem;
		this.id = id++;
	}

	bind(test, opts) {
		this.isOpen = opts.isOpen;
	}

	toggleOpen(openAttr) {
		// openAttr.isOpen = !openAttr.isOpen; this works but shouldn't be needed, will keep in for reference
		this.isOpen = !this.isOpen;
	}
}
