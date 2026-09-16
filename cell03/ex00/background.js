
const changeColorBtn = document.getElementById('changeColorBtn');
const body = document.body;

function getRandomHexColor() {
  
  const hexChars = '0123456789ABCDEF';
  let color = '#'; 

  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  
  return color;
}

changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
});