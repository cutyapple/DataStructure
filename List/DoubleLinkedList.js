const DLinkedList = (() => {
	const list = { head: null, tail: null };

	return {
		insertToTail: function (value) {
			const node = Node(value);

			if (!list.head) {
				list.head = node;
				list.tail = node;
			} else {
				node.prev = list.tail;
				list.tail.next = node;
				list.tail = node;
			}

			return list;
		},

		findNodeByValue: function (value) {
			let curNode = list.head;

			while (curNode) {
				if (curNode.value === value) {
					return curNode;
				}

				curNode = curNode.next;
			}

			return null;
		},

		deleteNodeByValue: function (value) {
			const targetNode = this.findNodeByValue(value);

			if (targetNode) {
				if (list.head === targetNode) {
					list.head = targetNode.next;
				}
				if (list.tail === targetNode) {
					list.tail = targetNode.prev;
				}
				if (targetNode.prev) {
					targetNode.prev.next = targetNode.next;
				}
				if (targetNode.next) {
					targetNode.next.prev = targetNode.prev;
				}
				targetNode.next = null;
				targetNode.prev = null;

				return targetNode.value;
			}

			return false;
		},

		show: function () {
			const listArr = [];
			let curNode = list.head;

			while (curNode) {
				listArr.push(curNode.value);
				curNode = curNode.next;
			}

			if (listArr.length) {
				console.log(listArr.join('->'));
			}

			return listArr;
		},
	};
})();

const Node = (value) => ({
	next: null,
	prev: null,
	value,
});

DLinkedList.insertToTail(1);
DLinkedList.insertToTail(2);
DLinkedList.insertToTail(3);
DLinkedList.show();
DLinkedList.deleteNodeByValue(3);
DLinkedList.insertToTail(4);
DLinkedList.show();
