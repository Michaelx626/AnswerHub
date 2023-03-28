const commentButton = async (event) => {
  event.preventDefault();

  const body = document.querySelector('#user_comment_box').value.trim();
  const post_id = window.location.pathname.split('/').pop();

  if (body) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ body, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    location.reload();
  }
};

document.getElementById('comment_btn').addEventListener('click', commentButton);
