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

const base = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;
// const body = document.querySelector('body');
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
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 100);
} 
btn.addEventListener('click', getImage);