import {inject, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

let id = 0;

@inject(EventAggregator, Element)
export class Dropdown {
	@bindable isOpen;
	@bindable isAccordion;

	constructor(ea, elem) {
		this.elem = elem;
		this.id = id++;
	}

	created(a) {}
	bind(bindingContext, overrideContext) {
	}
	attached(a) {}
	detached(a) {}
	unbind(a) {}
	activate(params, routeConfig) {
		// gets here when routed to or composed
	}

	toggleOpen(openAttr) {
		if (!this.isAccordion) {
			this.isOpen = !this.isOpen;
		}
	}
}
