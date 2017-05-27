import {bindable} from 'aurelia-framework';

export class Navigation {
	@bindable router;

	constructor() {
		this.isOpen = false;
	}

	toggleNav() {
		this.isOpen = !this.isOpen;
	}

	openNav(propagate) {
		this.isOpen = true;

		return true;
	}

	closeNav(propagate) {
		this.isOpen = false;

		return propagate;
	}
}
