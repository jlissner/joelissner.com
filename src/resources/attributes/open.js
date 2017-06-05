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
		if (newValue) {
			this.$this.stop().slideDown(parseInt(this.speed, 10) || 270);
		} else {
			this.$this.stop().slideUp(parseInt(this.speed, 10) || 270);
		}
	}
}
