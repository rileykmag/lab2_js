function changePic() 
{
  /* write code to change the picture to the one linked at:
  
    - https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rhode_Island_Rams_logo.svg/1200px-Rhode_Island_Rams_logo.svg.png
    
	- change the width of the image
  */
  let pic = document.getElementById("uri_logo");
  pic.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rhode_Island_Rams_logo.svg/1200px-Rhode_Island_Rams_logo.svg.png";
  pic.width = 200;

}


function changeTags() {
  /* write code to change the color of all paragraphs to one of your choosing */
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((p) => {
    p.style.color = "red";
  });
}


function removeParagraph(event) {
  if (confirm("Are you sure you want to remove this paragraph?")) {
      let paragraph = event.target.closest("p");
      if (paragraph) {
          paragraph.remove();
      }
  }
}