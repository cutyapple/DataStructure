const Node = (data) => ({
	data,
	next: null,
	prev: null,
});

const DEQueue = (() => {
	const list = { front: null, back: null };

	return {
		isEmpty: function () {
			return list.front === null;
		},
		pushFront: function (data) {
			const node = Node(data);

			if (this.isEmpty()) {
				list.front = node;
				list.back = node;
			} else {
				list.front.prev = node;
				node.next = list.front;
				list.front = node;
			}
		},
		popFront: function () {
			if (this.isEmpty()) {
				console.log(`Queue is Empty.`);

				return false;
			} else {
				const popedValue = list.front.value;

				if (list.front.next) {
					list.front.next.prev = null;
					list.front = list.front.next;

					return popedValue;
				}
			}
		},
		pushBack: function (data) {
			const node = Node(data);

			if (this.isEmpty()) {
				list.front = node;
				list.back = node;
			} else {
				list.back.next = node;
				node.prev = list.back;
				list.back = node;
			}
		},
		popBack: function () {
			if (this.isEmpty()) {
				console.log(`Queue is Empty.`);

				return false;
			} else {
				if (list.back.prev) {
					const popedValue = list.back.value;
					list.back.prev.next = null;
					list.back = list.back.prev;

					return popedValue;
				}
			}
		},
		show: function () {
			if (this.isEmpty()) {
				console.log(`Queue is Empty.`);
			} else {
				let curNode = list.front;
				const nodeArr = [];

				while (curNode) {
					nodeArr.push(curNode.data);

					curNode = curNode.next;
				}

				console.log(`(front) ${nodeArr.join('->')} (back)`);
			}
		},
	};
})();

DEQueue.pushFront(1);
DEQueue.pushFront(2);
DEQueue.pushFront(3);
DEQueue.show();
DEQueue.popFront();
DEQueue.show();
DEQueue.popBack();
DEQueue.show();
DEQueue.pushBack(4);
DEQueue.show();
