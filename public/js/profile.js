
// const editProfile = async () => {
//     const response = await fetch('/api/users/profile', {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert(response.statusText);
//     }
//   };
  
//    document.querySelector('#profile-link').addEventListener('click', editProfile);


// const editProfileBtn = document.getElementById("edit-profile");
// const editModalSaveBtn = document.getElementById("edit-profile-modal-btn")

// /* editProfile() - allows user to edit profile through modal
// *@profilePicInput - input that allows user to upload photo from their file system
// *@profilePicPreview - img HTMLelement, src will be changed to change photo
// * @reader - FileReader javascript API that allows for selecting documents from file system
// *@file - selected file by user
// */

// const editProfilePic = async () =>{
//     const profilePicInput = document.getElementById('profile-pic-input');
//     const profilePicPreview = document.getElementById('profile-pic-preview');
//     profilePicInput.addEventListener('change', () => {
//         const file = profilePicInput.files[0];
//         const reader = new FileReader();
//         reader.addEventListener('load', async () => {
//           profilePicPreview.src = reader.result;
//           newProfilePic = await reader.result;
//           console.log(newProfilePic);
//           const image = new Image();
//           image.src = reader.result;
//           image.onload = async () => {
//             const width = 50;
//             const height = 50;
//             const bitmap = await createImageBitmap(image);
            
//             const resizedBitmap = await createImageBitmap(bitmap, {
//               resizeWidth: width,
//               resizeHeight: height,
//               resizeQuality: 'high',
//             });
            
//             const canvas = document.createElement('canvas');
//             canvas.width = resizedBitmap.width;
//             canvas.height = resizedBitmap.height;
            
//             const ctx = canvas.getContext('2d');
//             ctx.drawImage(resizedBitmap, 0, 0);
            
//             compressedImage = canvas.toDataURL('image/jpeg', 0.7);
//             console.log(compressedImage);
//           };
//         });
          



//           // let AllProfilePics = document.querySelectorAll(".post-profile-pic");
//           // for ( profilePic of AllProfilePics){
//           //   profilePic.src = reader.result
//           //   profilePic.style.width="50px";
//           //   profilePic.style.height="50px;";
//           // }

//         if (file) {
//           reader.readAsDataURL(file);
//         }
//       });
     

//   }

// editProfileBtn.addEventListener("click", editProfilePic);
  
const uploadSaveBtn = document.getElementById("upload-save");

const saveUpload = async () => {
  const form = document.getElementById('upload-form');
  const formData = new FormData(form);

  const response = await fetch('/api/users/update-profile-pic', {
    method: 'PUT',
    body: formData,
  });

  const responseJson = await response.json();
  const profilePic = responseJson.profilePic;
console.log(profilePic);

  const profilePicElement = document.getElementById('profile-pic-preview');
  profilePicElement.src = '/api/users/' + profilePic;
  console.log(profilePicElement)

};

uploadSaveBtn.addEventListener("click", saveUpload)

// const setProfilePic = async () => {
//   const profilePicElement = document.getElementById('profile-pic-preview');

//   try {
//     const response = await fetch('/api/users/', {
//             method: 'GET',
//             headers: { 'Content-Type': 'application/json' },
//           })
//     const blob = await response.blob();
//     const objectURL = URL.createObjectURL(blob);
//     profilePicElement.src = objectURL;
//     console.log(objectURL);
//     // Remove the "blob:" prefix from the src attribute
//     profilePicElement.src = profilePicElement.src.replace('blob:', '');
//   } catch (error) {
//     console.error(error);
//   }
// };

// window.addEventListener("load", setProfilePic);
