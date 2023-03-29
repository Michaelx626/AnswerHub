const searchBar = async (event) => {
  event.preventDefault();
  const userSearch = document.querySelector('.user_searches').value.trim();

  console.log(userSearch);

  if (userSearch) {
    const url = `/search?userSearch=${encodeURIComponent(userSearch)}`;

    const response = await fetch(url);

    if (response.ok) {
      document.location.replace(url);
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.search_btn').addEventListener('click', searchBar);
