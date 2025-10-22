function updateTime() {
  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    const now = new Date();
    timeElement.textContent = now.toLocaleString(); 
  }
}

updateTime();
setInterval(updateTime, 1000);
