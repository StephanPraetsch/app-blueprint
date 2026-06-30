const statusLabel = document.getElementById("status");
const timeLabel = document.getElementById("time");
const updateButton = document.getElementById("update-button");
let updateCounter = 0;
const renderTime = () => {
  if (!timeLabel) {
    return;
  }
  timeLabel.textContent = new Date().toLocaleTimeString();
};
if (updateButton && statusLabel) {
  updateButton.addEventListener("click", () => {
    updateCounter += 1;
    statusLabel.textContent = `Updated ${updateCounter} time${updateCounter === 1 ? "" : "s"}`;
  });
}
renderTime();
setInterval(renderTime, 1000);
