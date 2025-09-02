const startButton = document.getElementById('start-button');
const progressContainer = document.getElementById('progress-container');
const progressText = document.getElementById('progress-text');
const resetButton = document.getElementById('reset-button');
const progressButton = document.getElementById('increment-button');
const daysCount = document.getElementById('days-count');

let daysNoSmokeCount = 0;

const updateProgressText = () => {
  switch (daysNoSmokeCount) {
    case 0:
      progressText.textContent = "Welcome! Let's help Sasuke quit smoking.";
      break;
    case 1:
      progressText.textContent =
        "Congratulations! You've gone 1 day without smoking keep going.";
      break;
    case 7:
      progressText.textContent =
        "Congratulations! You've gone 7 days without smoking.";
      break;
    case 15:
      progressText.textContent =
        "Congratulations! You've gone 15 days without smoking.";
      break;
    case 30:
      progressText.textContent =
        "Congratulations! You've gone 30 days without smoking. The goal has been achieved";
      break;
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
