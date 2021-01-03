const NodeList = (() => {
	const list = {};

	return {
		insertToTail: function (data) {
			const node = Node(data);

			if (!list.head) {
				list.head = node;
				list.tail = node;
			} else {
				list.tail.next = node;
				list.tail = node;
			}

			return list;
		},

		deleteToHead: function () {
			let value = null;

			if (list.head) {
				value = list.head.value;
				list.head = list.head.next;

				if (list.head === null) {
					list.tail = null;
				}
			}

			return value;
		},

		contains: function (targetValue) {
			let curNode = list.head;

			while (curNode) {
				if (targetValue === curNode.value) {
					return true;
				}

				curNode = curNode.next;
			}

			return false;
		},

		show: function () {
			const valueArr = [];

			let curNode = list.head;

			while (curNode) {
				valueArr.push(curNode.value);

				curNode = curNode.next;
			}

			return valueArr;
		},
	};
})();

const Node = (value) => ({
	next: null,
	value: value,
});

console.log(NodeList.insertToTail(1));
console.log(NodeList.insertToTail(2));
console.log(NodeList.insertToTail(3));
console.log(NodeList.deleteToHead());
console.log(NodeList.contains(1));
console.log(NodeList.contains(2));
console.log(NodeList.show());
