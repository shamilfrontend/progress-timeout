function userProgress(time) {
  let start = 0;
  const progressElement = document.querySelector('.progress-bar');
  const newTime = Math.round(time * 1000 / 100);

  const intervalId = setInterval(() => {
    if (start > 100) {
      clearInterval(intervalId);
      showLoadingBlock();
    } else {
      progressElement.value = start;
    }
    start += 1;
  }, newTime);
}

function showLoadingBlock() {
  document.querySelector('.loading').style.display = 'block';
}

userProgress(3);
