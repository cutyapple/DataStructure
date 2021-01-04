const Queue = ((MAX_SIZE) => {
	const list = [];

	return {
		enqueue: function (value) {
			if (list.length === MAX_SIZE) {
				console.log(`Queue Overflow`);
				return `Queue Overflow`;
			}
			list.push(value);
		},
		dequeue: function () {
			if (list.length === 0) {
				console.log(`Queue Underflow`);
				return `Queue Underflow`;
			}
			return list.shift();
		},
		show: function () {
			if (list.length) {
				console.log(`(Back) ${list.join('->')} (Front)`);
			}
		},
	};
})(3);

Queue.enqueue(1);
Queue.enqueue(2);
Queue.enqueue(3);
Queue.enqueue(4);
Queue.show();
Queue.dequeue();
Queue.show();
Queue.dequeue();
Queue.dequeue();
Queue.dequeue();
Queue.show();
