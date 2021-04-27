const inputs = document.querySelectorAll('.filters input')

function handleUpdate(){
  console.log(this.name);
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
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const BTN_RESET = document.querySelector('.btn-reset');
console.log(BTN_RESET);

BTN_RESET.onclick = function(){
  // inputs.forEach(input => input.value = );
  // document.getElementById('myform').reset();
  console.log(document.getElementsByClassName('filters')[0]);
  document.getElementsByClassName('filters')[0].reset();

  // document.getElementById('bodySlider').value = 0;
  // document.getElementById('leftArmSlider').value = -20;
  // .... etc
};