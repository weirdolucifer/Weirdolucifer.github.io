var html = document.querySelector("html");
var toggleOpen = document.getElementById('toggle-open');
var toggleClose = document.getElementById('toggle-close');
var navMenu = document.getElementsByClassName('nav-menu')[0];
//var card = document.querySelectorAll('.card');

html.addEventListener('click', function () {
  navMenu.classList.remove('open');
});

toggleOpen.addEventListener('click', function (e) {
  e.stopPropagation();
  navMenu.classList.toggle('open');
});

toggleClose.addEventListener('click', function (e) {
  e.stopPropagation();
  navMenu.classList.toggle('open');
});

const jobTitles = [
  { title: "Sketcher", emoji: "🖌️" },
  { title: "Astronomer", emoji: "🔭" },
  { title: "Artist", emoji: "🎨" },
];
let currentIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const title = document.getElementById("job-title");
  const emoji = document.getElementById("emoji");
  if (currentIndex >= jobTitles.length) {
    currentIndex = 0;
  }
  const currentTitle = jobTitles[currentIndex].title;
  const currentEmoji = jobTitles[currentIndex].emoji;
  if (isDeleting) {
    currentText = currentTitle.substring(0, currentText.length - 1);
  } else {
    currentText = currentTitle.substring(0, currentText.length + 1);
  }
  title.innerHTML = currentText;
  emoji.innerHTML = currentEmoji;
  if (!isDeleting && currentText === currentTitle) {
    isDeleting = true;
    typingSpeed = 300;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    currentIndex++;
    typingSpeed = 100;
  }
  setTimeout(type, typingSpeed);
}

type();
