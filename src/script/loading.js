 // scripts/loading.js
document.addEventListener('DOMContentLoaded', () => {
  const loadingText = document.getElementById('loading-text');
  const loading = document.getElementById('loading');

  let progress = 0;
  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => { loading.style.display = 'none'; }, 500);
    } else {
      loadingText.innerText = `${++progress}%`;
    }
  }, 10);
});