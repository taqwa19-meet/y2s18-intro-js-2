// YOUR TASK: Add more pictures!
var currentIndex = 0;
var pictures = ["./imgs/dog.jpg", "./imgs/express.jpeg", "./imgs/harry.jpeg", "./imgs/potter.jpeg", "./imgs/roof.jpeg"];
function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again


  document.getElementsByTagName("img")[0].addEventListener("click", function (event) {
     //event.target.innerHTML="ive been clicked";
     alert("click the button");
  
});


  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }



  // YOUR TASK: Finish this function!
  //i didnt finish the function still(part1.5,number5)
}

showNextPicture()