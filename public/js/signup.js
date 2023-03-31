const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      const modalElement = document.querySelector('#warning');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
};

document
  .querySelector('.signup_form')
  .addEventListener('submit', signupFormHandler);
