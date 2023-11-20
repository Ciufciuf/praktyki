const books = [
	{ title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7 },
	{ title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4 },
	{ title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2 },
	{ title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9 },
	{ title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8 },
	{ title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1 },
	{ title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5 },
];
//zad6
const letters = book => book.reduce((letters, book) => letters + book.title.replace(/\s+/g, '').length, 0);
const pages = list => list.filter(book => book.pages % 2 == 0 && book.genre.endsWith('y'));

//zad7
const rating = list => list.filter(book => book.rating > 5);
const pages1 = list => list.filter(book => book.pages % 2 == 1);
const isnum = list => list.filter(book => /\d+/.test(book.title));

//zad8
const sort = list => list.sort((a, b) => b.title.length - a.title.length);
const title = list => list.map(({ title }) => title);

const compose =
	(...fns) =>
	x =>
		fns.reduce((acc, fn) => fn(acc), x);

let wynik6 = compose(pages, letters);
console.log(wynik6(books));

let wynik7 = compose(rating, pages1, isnum);
console.log(wynik7(books));

let wynik8 = compose(sort, title);
console.log(wynik8(books)[1]);
