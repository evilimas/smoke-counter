const jsConfetti = new JSConfetti();
const startButton = document.getElementById('start-button');
const progressContainer = document.getElementById('progress-container');
const progressText = document.getElementById('progress-text');
const resetButton = document.getElementById('reset-button');
const progressButton = document.getElementById('increment-button');
const daysCount = document.getElementById('days-count');
const progressPicture = document.getElementById('progress-image');
const backgroundMusic = document.getElementById('background-music');
const goalInput = document.getElementById('goalInput');
const goalInputLabel = document.getElementById('goalInputLabel');
const goal = document.getElementById('goal');

//let daysNoSmokeCount = 0;

const updateProgressText = () => {
  switch (model.inputs.mainPage.daysNoSmokeCount) {
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
      jsConfetti.addConfetti();
      break;
    case 60:
      progressText.textContent =
        "Congratulations! You've gone 60 days without smoking.";
      progressPicture.src = '/pictures/60days.jpeg';
      backgroundMusic.src = '/songs/SixtyDaysStrong.mp3';
      backgroundMusic.style.display = 'block';
      jsConfetti.addConfetti();
      break;
    default:
      progressText.textContent = `Days without smoking: ${model.inputs.mainPage.daysNoSmokeCount}`;
      progressPicture.src = '/pictures/1days.jpg';
  }
};

startButton.addEventListener('click', () => {
  progressContainer.style.display = 'block';
  startButton.style.display = 'none';
  goalInput.style.display = 'none';
  goalInputLabel.style.display = 'none';
  goal.innerHTML = model.inputs.mainPage.noSmokeDaysGoal;
});

progressButton.addEventListener('click', () => {
  model.inputs.mainPage.daysNoSmokeCount++;
  daysCount.textContent = model.inputs.mainPage.daysNoSmokeCount;
  resetButton.style.display = 'inline';
  updateProgressText();
});

resetButton.addEventListener('click', () => {
  model.inputs.mainPage.daysNoSmokeCount = 0;
  daysCount.textContent = model.inputs.mainPage.daysNoSmokeCount;
  resetButton.style.display = 'none';
  updateProgressText();
});

goalInput.addEventListener('change', () => {
  model.inputs.mainPage.noSmokeDaysGoal = parseInt(goalInput.value);
});
