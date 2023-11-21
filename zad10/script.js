function multiplyAsync(x, y) {
	return (promise = new Promise((resolve, reject) => {
		if (typeof x == 'number' && typeof y == 'number') {
			resolve(x * y);
		} else {
			reject('zły argument');
		}
	}));
}

multiplyAsync(5, '89')
	.then(result => {
		console.log(`wynik mnożenia ${result}`);
	})	
	.catch(error => console.message);

multiplyAsync(9, 6)
	.then(result => {
		console.log(`wynik mnożenia ${result}`);
	})
	.catch(error => console.message);
