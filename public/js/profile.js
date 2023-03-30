
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
  console.log(response)
  console.log(profilePic)
  const bio = responseJson.userBio;
  const bioElement = document.getElementById('userBio');
  bioElement.innerText = bio;
  console.log(bio)
  setTimeout(() => {
    location.reload();
  }, 1000);
  


uploadSaveBtn.addEventListener("click", saveUpload);


