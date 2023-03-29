const editProfileBtn = document.getElementById('edit-profile');
const editModalSaveBtn = document.getElementById('edit-profile-modal-btn')
const uploadSaveBtn = document.getElementById('upload-save')

const editProfile = () =>{
    const profilePicInput = document.getElementById('profile-pic-input');
    const profilePicPreview = document.getElementById('profile-pic-preview');
    profilePicInput.addEventListener('change', () => {
        const file = profilePicInput.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          profilePicPreview.src = reader.result;
          let AllProfilePics = document.querySelectorAll('.post-profile-pic');
          for ( profilePic of AllProfilePics){
            profilePic.src = reader.result
            profilePic.style.width='50px';
            profilePic.style.height='50px;';
          }

        });
        if (file) {
          reader.readAsDataURL(file);
        }
  });
}

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
    document.location.replace('/profile')
  };

editProfileBtn.addEventListener("click", editProfile);
uploadSaveBtn.addEventListener('click', saveUpload);
