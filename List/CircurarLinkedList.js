const Node = (value) => ({ next: null, prev: null, value });

const CLinkedList = (() => {
	const list = { head: null, tail: null };

	return {
		insertToTail: function (value) {
			const node = Node(value);

			if (!list.head) {
				list.head = node;
				list.tail = node;
				node.next = list.head;
				node.prev = list.tail;
			} else {
				node.prev = list.tail;
				list.tail.next = node;
				list.tail = node;
				list.tail.next = list.head;
				list.head.prev = list.tail;
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

			return false;
		},

		deleteNodeByValue: function (value) {
			const targetNode = this.findNodeByValue(value);

			if (targetNode) {
				if (targetNode === list.head) {
					list.head = targetNode.next;
				}
				if (targetNode === list.tail) {
					list.tail = targetNode.prev;
				}
				if (targetNode.next) {
					targetNode.next.prev = targetNode.prev;
				}
				if (targetNode.prev) {
					targetNode.prev.next = targetNode.next;
				}
				return value;
			}

			return false;
		},

		show: function () {
			let curNode = list.head;
			const listArr = [];

			while (curNode) {
				listArr.push(curNode.value);
				curNode = curNode.next;
			}

			console.log(listArr.join('->'));

			return listArr;
		},
	};
})();

CLinkedList.insertToTail(1);
CLinkedList.insertToTail(2);
CLinkedList.insertToTail(3);
CLinkedList.show();
CLinkedList.deleteNodeByValue(1);
CLinkedList.deleteNodeByValue(3);
CLinkedList.show();
CLinkedList.insertToTail(4);
CLinkedList.insertToTail(5);
CLinkedList.show();
