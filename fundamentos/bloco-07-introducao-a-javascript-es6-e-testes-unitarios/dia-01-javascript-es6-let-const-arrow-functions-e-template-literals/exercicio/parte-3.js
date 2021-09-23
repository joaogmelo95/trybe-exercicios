const pCount = document.querySelector('.click-p');
const countBtn = document.querySelector('.click');

let count = 0;
pCount.innerHTML = count;

countBtn.addEventListener('click', () => {
  count += 1;
  pCount.innerHTML = count;
});