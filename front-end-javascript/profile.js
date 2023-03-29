const editProfileBtn = document.getElementById("edit-profile");
const editModalSaveBtn = document.getElementById("edit-profile-modal-btn")

/* editProfile() - allows user to edit profile through modal
*@profilePicInput - input that allows user to upload photo from their file system
*@profilePicPreview - img HTMLelement, src will be changed to change photo
* @reader - FileReader javascript API that allows for selecting documents from file system
*@file - selected file by user
*/

const editProfile = () =>{
    const profilePicInput = document.getElementById('profile-pic-input');
    const profilePicPreview = document.getElementById('profile-pic-preview');
    profilePicInput.addEventListener('change', () => {
        const file = profilePicInput.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          profilePicPreview.src = reader.result;
          let AllProfilePics = document.querySelectorAll(".post-profile-pic");
          for ( profilePic of AllProfilePics){
            profilePic.src = reader.result
            profilePic.style.width="50px";
            profilePic.style.height="50px;";
          }

        });
        if (file) {
          reader.readAsDataURL(file);
        }
      });


  }

editProfileBtn.addEventListener("click", editProfile);


const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('.logout-link').addEventListener('click', (event) => {
  event.preventDefault();
  logout();
});




