import $ from 'jquery';

// some methods you can use to bind again: 'updateTarget', 'updateSource', 'callSource'

export class ValidateNumberBindingBehavior {
	bind(binding, scope, _min, _max) {
		// prevent null reference exceptions
		if (!binding.updateSource) {
			return;
		}

		const setVal = binding.updateSource.bind(binding); // create variable to call to propagate value through aurelia
		
		binding.updateSourceHolding = binding.updateSource; // store a reference to the original binding
		binding.updateSource = this.validateNumber.bind(binding, setVal, binding.target, _min, _max); // set new binding for updateSource to equal our validate number function (setVal contains the old function which will be used to actually propagate the value change as expected)
	}

	unbind(binding, scope) {
		// prevent null reference exceptions
		if (!binding.updateSource) {
			return;
		}

		binding.updateSource = binding.updateSourceHolding; // set binding to original
		binding.updateSourceHolding = null; // clear out holding
	}

	validateNumber(setVal, elem, _min, _max, value) {
		const val = parseInt(value, 10);
		const min = (_min === undefined || _min === false) ? -(Infinity) : _min;
		const max = (_max === undefined || _max === false) ? Infinity : _max;

		if (isNaN(val)) {
			setVal(0);
			elem.value = 0;
		} else if (val < min) {
			setVal(min);
			elem.value = min;
		} else if (val > max) {
			setVal(max);
			elem.value = max;
		} else {
			setVal(val);
			elem.value = val;
		}
	}
}
