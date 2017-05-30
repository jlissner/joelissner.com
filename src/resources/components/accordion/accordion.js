
import Test from './test';

export class Accordion {
	constructor () {
		this.title = Test.testTitle;
	}

	activate(a) {
		console.log(a)
	}

	created(a) {
		console.log(a)
	}
}