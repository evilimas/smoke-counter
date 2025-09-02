const startButton = document.getElementById('start-button');
const progressContainer = document.getElementById('progress-container');
const progressText = document.getElementById('progress-text');
const resetButton = document.getElementById('reset-button');
const progressButton = document.getElementById('increment-button');

let daysNoSmokeCount = 0;

startButton.addEventListener('click', () => {
  progressContainer.style.display = 'block';
  startButton.style.display = 'none';
});

progressButton.addEventListener('click', () => {
  daysNoSmokeCount++;
  progressText.textContent = `Days without smoking: ${daysNoSmokeCount}`;
  resetButton.style.display = 'inline';
});

resetButton.addEventListener('click', () => {
  daysNoSmokeCount = 0;
  progressText.textContent = `Days without smoking: ${daysNoSmokeCount}`;
  resetButton.style.display = 'none';
});
