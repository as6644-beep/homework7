// Step 1
console.log('Hello World!');

// Step 3
const name = "Andy SE";
let hasDownloadedResume = false;

const PROJECT_DEADLINE = "2026-12-15";

// Step 4
function showGreeting(name) {
  return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

// Bonus
function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

// Step 5
function daysUntilDeadline(deadline) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const today = new Date();
  const target = new Date(deadline);
  const difference = target.getTime() - today.getTime();
  return Math.ceil(difference / msPerDay);
}

// Step 2
function handleResumeDownload() {
  if (hasDownloadedResume === true) {
    return;
  }
  hasDownloadedResume = true;
  setTimeout(function () {
    alert("Your resume is downloaded successfully!");
  }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('greeting').textContent =
    getTimeOfDay() + "! " + showGreeting(name);

  const daysLeft = daysUntilDeadline(PROJECT_DEADLINE);
  console.log("Days until deadline: " + daysLeft);
  document.getElementById('deadline-days').textContent = daysLeft + " days left";

  const resumeButtons = document.querySelectorAll('.btn-resume');
  resumeButtons.forEach(function (button) {
    button.addEventListener('click', handleResumeDownload);
  });

});
