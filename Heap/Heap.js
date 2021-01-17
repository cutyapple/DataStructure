const Heap = (() => {
	const heap = [100];

	return {
		insert: function (data) {
			heap.push(data);

			let cur = heap.length - 1;
			let parent = Math.floor(cur / 2);

			while (heap[parent] < data) {
				this.swap(parent, cur);
				cur = parent;
				parent = Math.floor(cur / 2);
			}

			console.log(heap);
		},
		pop: function () {},
		swap: function (a, b) {
			[heap[a], heap[b]] = [heap[b], heap[a]];
		},
	};
})();

Heap.insert(1);
Heap.insert(2);
Heap.insert(3);
Heap.insert(4);
