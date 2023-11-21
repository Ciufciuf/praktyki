const Promise = new Promise(resolve => {
	setTimeout(() => resolve('Udało się!'), 5000);
});

Promise.then(console.log);
