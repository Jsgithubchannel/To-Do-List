const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `background/${imgNumber}.jpg`;
  body.appendChild(image);
  image.classList.add("bgImage");
}

function randomNumber() {
  const random = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return random;
}

const random = randomNumber();
paintImage(random);
