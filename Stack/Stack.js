const Stack = ((MAX_COUNT) => {
	const list = [];

	return {
		push: function (value) {
			if (list.length === MAX_COUNT) {
				console.log('Stack Overflow');
				return 'Stack Overflow';
			}
			console.log(`push ${value}`);
			list.push(value);
		},
		pop: function () {
			if (list.length === 0) {
				console.log('Stack Underflow');
				return 'Stack Underflow';
			}
			const popedValue = list.pop();
			console.log(`pop ${popedValue}`);
			return popedValue;
		},
		show: function () {
			if (list.length) {
				console.log(`(bottom) ${list.join('->')} (top)`);
			} else {
				console.log('null');
			}
		},
	};
})(3);

Stack.push(1);
Stack.push(2);
Stack.push(3);
Stack.push(4);
Stack.show();
Stack.pop();
Stack.show();
