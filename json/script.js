let tera = 1;

 const showPost = (postId) => 
 fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            document.getElementById('title').textContent = post.title;
            document.getElementById('wynik').textContent = post.body;
        });
        
        const next = () => {
            tera++;
            showPost(tera);
        };
        const previous = () => {
            if (tera > 1) {
        tera--;
        showPost(tera);
    }
};