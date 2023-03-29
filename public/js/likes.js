const getLikes = async (event) => {
    event.preventDefault();
    
    const postId = event.target.getAttribute('data-id');
    const currLikes = parseInt(event.target.getAttribute('data-value'));
    
    await fetch(`/api/likes/posts/${postId}/likes`, {
        method: 'PUT',
        body: JSON.stringify({ number_likes: currLikes + 1 }),
        headers: { 'Content-Type': 'application/json' }
    })

    // location.reload(); need this to refresh the page to show the likes (ask how to implement it!)
};

document.querySelectorAll('.getLikes').forEach((button) => {
    button.addEventListener('click', getLikes);
 });