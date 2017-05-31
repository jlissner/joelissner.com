
import Test from './test';

export class Accordion {
	constructor() {
		this.title = Test.testTitle;
	}

	created() {}
	bind(bindingContext, overrideContext) {}
	attached() {}
	detached() {}
	unbind() {}
	activate(params, routeConfig) {
		// gets here when routed to
	}
}
