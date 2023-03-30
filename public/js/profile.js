
const uploadSaveBtn = document.getElementById('upload-save');

const saveUpload = async () => {
  const form = document.getElementById('upload-form');
  const formData = new FormData(form);

  const response = await fetch('/api/users/update-profile-pic', {
    method: 'POST',
    body: formData,
  });
 
  const responseJson = await response.json();
  const profilePic = responseJson.profilePic;
  const bio = responseJson.userBio;
  const bioElement = document.getElementById('userBio');
  bioElement.innerText = bio;

  const profilePicElement = document.getElementById('profile-pic-preview');
  profilePicElement.src = 'window.location.pathname' + profilePic;

  // window.location.replace('/profile');
};

document.addEventListener('DOMContentLoaded', () => {
  uploadSaveBtn.addEventListener('click', () => 
  setTimeout(() => {
    saveUpload();
    // window.location.replace('/profile');
    location.reload();
  }), 1000);
});

// uploadSaveBtn.addEventListener('click', saveUpload);