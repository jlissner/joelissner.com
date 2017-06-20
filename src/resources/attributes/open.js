import {bindable, inject} from 'aurelia-framework';
import $ from 'jquery';

@inject(Element)
export class OpenCustomAttribute {
	@bindable({ primaryProperty: true }) isOpen;
	@bindable speed;

	constructor(element) {
		this.element = element;
	}

	bind() {
		this.$this = $(this.element);

		if (this.isOpen) {
			this.$this.show();
		} else {
			this.$this.hide();
		}
	}

	isOpenChanged(newValue, oldValue) {
		const speed = parseInt(this.speed, 10) || 270;

		if (newValue) {
			this.$this.stop().slideDown(speed);
		} else {
			this.$this.stop().slideUp(speed);
		}
	}
}
