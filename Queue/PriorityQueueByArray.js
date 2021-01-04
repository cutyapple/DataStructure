const Node = (data, priority) => ({
	data,
	priority,
});

const PQueue = (() => {
	const queue = [];

	return {
		insert: function (data, priority) {
			const node = Node(data, priority);
			let isContains = false;

			for (let index in queue) {
				if (queue[index].priority < node.priority) {
					queue.splice(index, 0, node);
					isContains = true;
					break;
				}
			}

			if (!isContains) {
				queue.push(node);
			}
		},

		delete: function () {
			if (this.isEmpty()) {
				console.log('Queue is Empty');
			}
			return queue.shift();
		},

		front: function () {
			if (this.isEmpty()) {
				console.log('Queue is Empty');
			}
			return queue[0];
		},

		rear: function () {
			if (this.isEmpty()) {
				console.log('Queue is Empty');
			}
			return queue[queue.length - 1];
		},

		isEmpty: function () {
			return queue.length === 0;
		},

		print: function () {
			console.log(`(front) ${queue.map((q) => q.data).join('->')} (rear)`);
		},
	};
})();

PQueue.insert('A', 1);
PQueue.insert('B', 2);
PQueue.insert('C', 3);
PQueue.insert('D', 4);
PQueue.print();
