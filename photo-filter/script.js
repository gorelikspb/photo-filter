const inputs = document.querySelectorAll('.filters input')

function handleUpdate(){

  console.log(this);
  const inp = document.getElementsByName(this.name);
  // console.log(inp[0]);
  out = (inp[0].nextElementSibling);

  const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    out.value = this.value;
    // console.log (document.documentElement)
    //TODO: add output value
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const BTN_RESET = document.querySelector('.btn-reset');
// console.log(BTN_RESET);
const IMG = document.querySelector('img');
console.log(IMG);

BTN_RESET.onclick = function(){
  //TODO: DRY
  inputs.forEach(input => {
      input.value = input.defaultValue;
      const inp = document.getElementsByName(input.name);
      out = (inp[0].nextElementSibling);
      let suff = input.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${input.name}`, input.value + suff);
      out.value = input.value;
    }
  );


};

/////////////

const base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';

const date = new Date();
let hours = date.getHours();

let timeofday = 'evening'

if (hours < 6) {
  timeofday = 'night';
} else if (hours < 12) {
  timeofday = 'morning';
} else if (hours <18) {
  timeofday = 'day';
}

const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
const btn = document.querySelector('.btn-next');

function viewBgImage(src) {  
  const img = new Image();
  img.src = src;
  img.onload = () => {      
    IMG.src = `${src}`;
  }; 
}

function getImage() {
  const index = i % images.length;
  const imageSrc = base + timeofday + '/' + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 100);
} 

btn.addEventListener('click', getImage);

const fileInput = document.querySelector('input[type="file"]');

// const imageContainer = document.querySelector('.image-container');

fileInput.addEventListener('change', function(e) {
  const file = fileInput.files[0];
  fileInput.value = '';
  const reader = new FileReader();
  reader.onload = () => {
    // const img = new Image();
    IMG.src = reader.result;
    // imageContainer.innerHTML = "";
    // imageContainer.append(img);
  }
  reader.readAsDataURL(file);
});


const BTN_FULLSCREEN = document.querySelector(".fullscreen");


BTN_FULLSCREEN.addEventListener('click', (event)=>{
  toggleFullScreen();

})

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}


// const canvas = document.querySelector('canvas');

// function drawImage() {
//   const img = new Image();
//   img.setAttribute('crossOrigin', 'anonymous'); 
//   img.src = "https://upload.wikimedia.org/wikipedia/commons/c/c9/Зимний_пейзаж.jpg";
//   img.onload = function() {
//     canvas.width = img.width;
//     canvas.height = img.height;
//     const ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);

//   };  
// }
// drawImage();
// // console.log(img);
// // const dataURL = canvas.toDataURL();
// IMG.src = canvas.src;пше 
// // IMG.src = dataURL;
// // viewBgImage(dataURL);

// // console.log(dataURL);
