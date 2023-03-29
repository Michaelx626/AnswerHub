const getLikes = async (event) => {
  event.preventDefault();

  const postId = event.target.getAttribute('data-id');
  const currLikes = parseInt(event.target.getAttribute('data-value'));
  const isLiked = event.target.getAttribute('data-liked') === 'true';

  console.log(isLiked);

  if(isLiked){
    await fetch(`/api/likes/posts/${postId}/likes`, {
      method: 'PUT',
      body: JSON.stringify({ number_likes: currLikes - 1 }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log("decrementing before", event.target);
    event.target.setAttribute('data-liked', 'false');
    console.log("decrementing after", event.target);
  } else {
    await fetch(`/api/likes/posts/${postId}/likes`, {
      method: 'PUT',
      body: JSON.stringify({ number_likes: currLikes + 1 }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log("incrementing after", event.target);
    event.target.setAttribute('data-liked', 'true');
    console.log("incrementing after", event.target);
  }

  location.reload();
};

document.querySelectorAll('.getLikes').forEach((button) => {
  button.addEventListener('click', getLikes);
});
