const searchBar = async () => {
    const userSearch = document.querySelector('.user_searches').value.trim();

    if (userSearch){
        const response = await fetch('./api/users/search', {
            method: 'POST',
            body: JSON.stringify({ userSearch }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok){
            document.location.replace('/search');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.search_btn').addEventListener('click', searchBar);