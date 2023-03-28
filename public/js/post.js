const generatePost = async () => {
  const content = document.querySelector('#user_inputbox').value.trim();

  if (content) {
    const response = await fetch('./api/posts', {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.post_btn').addEventListener('click', (event) => {
  event.preventDefault();
  generatePost();
});
