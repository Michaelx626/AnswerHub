const caption = document.getElementById("post-caption");
const postButton = document.getElementById("post-button");
const userName = document.getElementById("username").innerText;

/* postCaption() - append new post and caption to Timeline 
*@captionPost - user's caption as a string
* @timeline - the timeline of the homepage
*@captionBody - createdDiv with caption appended to body
*@getCurrentTime() - gets current time and stores it within the caption
* @returns - appended post to timeline
*/
const postCaption = (event) =>{
    event.preventDefault()
if(caption.value == ""){
    alert("OOPS! You need to enter a title before posting!")
} else{
function getCurrentTime() {
const now = new Date();
let hours = now.getHours();
let amOrPm = hours < 12 ? 'AM' : 'PM';
hours = hours % 12 || 12;
const fullDate = new Date().toDateString();
const minutes = now.getMinutes().toString().padStart(2, '0');
return `${fullDate} at ${hours}:${minutes}:${amOrPm}`;
      }
const captionPost = caption.value;
const timeline = document.getElementById("timeline");
let captionBody = `<div class="card mt-1 mb-2">
<div class="card-body">
<div class="media mb-3">
<img src="https://via.placeholder.com/50" class="mr-3 rounded-circle" alt="User Picture">
<div class="media-body">
<h5 class="mt-0">${userName}</h5>
<p>${captionPost}</p>
<div class="mt-3">
    <a href="#"><i class="far fa-comment"></i> </a>
    <a href="#"><i class="far fa-heart"></i></a>
    <div class="timestamp" id="timestamp" style="font-size: 10px;">${getCurrentTime()}</div>
</div>
</div>
</div>
</div>
</div>`
caption.value = "";
let captionDiv = document.createElement("div");
captionDiv.innerHTML = captionBody;
timeline.insertBefore(captionDiv, timeline.childNodes[2])
}
}
postButton.addEventListener("click", postCaption);
