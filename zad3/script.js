function bubble(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;
}

function bubblee(arr) {
	for (let i = 1; i < arr.length; i++) {
		let temp = arr[i];
		let j = i - 1;

		while (j >= 0 && temp.length < arr[j].length) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = temp;
	}

	return arr;
}

function sprawdz() {
	const arr = ['lolss', 'essaee', 'zse', 'esss'];

	if (typeof arr[0] === 'string') {
		const sortedArray = bubble(arr);
		const secondLast = bubblee(sortedArray);
		console.log(secondLast[secondLast.length - 2]);
	} else if (typeof arr[0] === 'number') {
		const sortedArray = bubble(arr);
		console.log(sortedArray[sortedArray.length - 2]);
	}
}
