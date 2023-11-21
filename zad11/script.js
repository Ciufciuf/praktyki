const Status = response => {
	if (response.status == 200) {
		return response.json();
	} else {
		reject('błąd');
	}
};

const Post = Json => {
	for (const post of Json) {
		console.log('Title:', post.title);
		console.log('Body:', post.body);
	}
};

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(Status)
	.then(Post)
	.catch(error => console.message);
