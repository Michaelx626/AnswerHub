const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
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
  .querySelector('.login_form')
  .addEventListener('submit', loginFormHandler);
