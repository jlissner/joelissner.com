import {bindable} from 'aurelia-framework';

export class Accordion {
	@bindable title;
	@bindable data;

	constructor() {
		this.activeItem = 0;
	}

	created() {}
	bind(bindingContext, overrideContext) {}
	attached() {}
	detached() {}
	unbind() {}
	activate(params, routeConfig) {
		// gets here when routed to or composed
	}

	changeActive(id) {
		// openAttr.isOpen = !openAttr.isOpen; this works but shouldn't be needed, will keep in for reference
		this.activeItem = this.activeItem === id ? -1 : id;
	}
}
