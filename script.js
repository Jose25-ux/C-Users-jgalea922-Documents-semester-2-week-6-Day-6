let attempts = 0;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSelectedVideo() {
  const radios = document.querySelectorAll('input[name="video"]');
  console.log(radios);
  let selectedValue;
  radios.forEach((radio) => {
    if (radio.checked) {
      selectedValue = radio.value;
      console.log(selectedValue);
    }
  });
  return selectedValue;
}

function checkGuess() {
  const selectedVideo = getSelectedVideo();
  console.log(selectedVideo);
  if (!Number(selectedVideo)) {
    document.getElementById("feedback").innerHTML = "Please select a video";
    return;
  } else {
    const randomVideo = getRandomNumber(1, 5);
    if (Number(selectedVideo) === 3) {
      document.getElementById("feedback").innerHTML =
        "Congratulations! You selected the correct video you are funny.";
    } else {
      document.getElementById("feedback").innerHTML =
        "You are incorrect. The funniest video was video 3 and you have no sence of humor.";
    }
  }
}

function resetGame() {
  const radios = document.querySelectorAll('input[name="video"]');
  radios.forEach((radio) => {
    radio.checked = false;
  });
  document.getElementById("feedback").innerHTML = "";
}
