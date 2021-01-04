const CQueue = ((MAX_SIZE) => {
	const list = Array.from({ length: MAX_SIZE }, () => null);

	let back = 0;
	let front = 0;

	return {
		isFull: function () {
			return (back + 1) % MAX_SIZE === front;
		},
		isEmpty: function () {
			return front === back;
		},
		enqueue: function (data) {
			if (this.isFull()) {
				console.log('queue is full');
			} else {
				list[back++ % MAX_SIZE] = data;
			}
		},
		dequeue: function () {
			if (this.isEmpty()) {
				console.log('queue is empty');
			} else {
				const data = list[front % MAX_SIZE];
				list[front++ % MAX_SIZE] = null;

				return data;
			}
		},
		show: function () {
			console.log(list);
		},
	};
})(5);

CQueue.enqueue(1);
CQueue.enqueue(2);
CQueue.enqueue(3);
CQueue.enqueue(4);
CQueue.enqueue(5);
CQueue.dequeue();
CQueue.dequeue();
CQueue.dequeue();
CQueue.dequeue();
CQueue.dequeue();
CQueue.enqueue(6);
CQueue.enqueue(7);
CQueue.enqueue(8);
CQueue.enqueue(9);
CQueue.dequeue();
CQueue.dequeue();
CQueue.show();
