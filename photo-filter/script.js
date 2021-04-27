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