const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(`${response.status}: ${response.statusText}`);
  }
};

document.querySelector('.logout-link').addEventListener('click', (event) => {
  event.preventDefault();
  logout();
});
