const timeLabel = document.getElementById("current-time");
const updateButton = document.getElementById("update-button");
const updateResult = document.getElementById("update-result");

let updateCount = 0;

const refreshTime = async (): Promise<void> => {
  if (!timeLabel) {
    return;
  }

  const currentTime = await window.appApi.getCurrentTime();
  timeLabel.textContent = currentTime;
};

const updateSomething = (): void => {
  if (!updateResult) {
    return;
  }

  updateCount += 1;
  updateResult.textContent = `Updated ${updateCount} time(s)`;
};

if (updateButton) {
  updateButton.addEventListener("click", updateSomething);
}

setInterval(() => {
  void refreshTime();
}, 1000);

void refreshTime();

