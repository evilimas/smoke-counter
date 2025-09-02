const startButton = document.getElementById('start-button');
const progressContainer = document.getElementById('progress-container');
const progressText = document.getElementById('progress-text');
const resetButton = document.getElementById('reset-button');
const progressButton = document.getElementById('increment-button');
const daysCount = document.getElementById('days-count');
const progressPicture = document.getElementById('progress-image');
const backgroundMusic = document.getElementById('background-music');

let daysNoSmokeCount = 0;

const updateProgressText = () => {
  switch (daysNoSmokeCount) {
    case 0:
      progressText.textContent = "Welcome! Let's help Sasuke quit smoking.";
      progressPicture.src = '/pictures/0days.jpg';

      break;
    case 1:
      progressText.textContent =
        "Congratulations! You've gone 1 day without smoking keep going.";
      progressPicture.src = '/pictures/1days.jpg';
      break;
    case 7:
      progressText.textContent =
        "Congratulations! You've gone 7 days without smoking.";
      progressPicture.src = '/pictures/7days-sasuke.jpeg';
      break;
    case 15:
      progressText.textContent =
        "Congratulations! You've gone 15 days without smoking.";
      progressPicture.src = '/pictures/15-days.png';
      break;
    case 30:
      progressText.textContent =
        "Congratulations! You've gone 30 days without smoking. The goal has been achieved";
      progressPicture.src = '/pictures/30days.jpg';
      backgroundMusic.src = '/songs/Smoke-Free Days.mp3';
      backgroundMusic.style.display = 'block';

      break;
    default:
      progressText.textContent = `Days without smoking: ${daysNoSmokeCount}`;
  }
};

startButton.addEventListener('click', () => {
  progressContainer.style.display = 'block';
  startButton.style.display = 'none';
});

progressButton.addEventListener('click', () => {
  daysNoSmokeCount++;
  daysCount.textContent = daysNoSmokeCount;
  //   progressText.textContent = `Days without smoking: ${daysNoSmokeCount}`;
  resetButton.style.display = 'inline';
  updateProgressText();
});

resetButton.addEventListener('click', () => {
  daysNoSmokeCount = 0;
  daysCount.textContent = daysNoSmokeCount;
  //   progressText.textContent = `Days without smoking: ${daysNoSmokeCount}`;
  resetButton.style.display = 'none';
  updateProgressText();
});
