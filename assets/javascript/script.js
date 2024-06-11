$(document).ready(function () {
  $(".video-carousel").on("play", function () {
    $(".video-carousel")
      .not(this)
      .each(function () {
        this.pause();
      });
  });

  const starsContainer = document.querySelector(".stars");
  const numberOfStars = 100;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
  }

  const words = ["Ruby", "Python", "PHP", "Javascript", "CSS", "HTML"];
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  const speed = 100;

  function typeWriter() {
    const word = words[currentWordIndex];
    if (currentCharIndex < word.length) {
      document.getElementById("stacks").innerHTML = word.substring(
        0,
        currentCharIndex + 1
      );
      currentCharIndex++;
      setTimeout(typeWriter, speed);
    } else {
      currentWordIndex++;
      if (currentWordIndex >= words.length) {
        currentWordIndex = 0;
      }
      currentCharIndex = 0;
      setTimeout(typeWriter, speed * 10);
    }
  }

  typeWriter();

  document
    .getElementById("toggleButton1")
    .addEventListener("click", function () {
      toggleContent("additionalContent1", "chevronIcon1", "moreLabel1");
    });

  document
    .getElementById("toggleButton2")
    .addEventListener("click", function () {
      toggleContent("additionalContent2", "chevronIcon2", "moreLabel2");
    });

  document
    .getElementById("toggleButton3")
    .addEventListener("click", function () {
      toggleContent("additionalContent3", "chevronIcon2", "moreLabel3");
    });

  function toggleContent(contentId, chevronIconId, moreLabelId) {
    const additionalContent = document.getElementById(contentId);
    const chevronIcon = document.getElementById(chevronIconId);
    const moreLabel = document.getElementById(moreLabelId);

    if (additionalContent.style.display === "none") {
      additionalContent.style.display = "block";
      additionalContent.style.opacity = "0";
      additionalContent.style.transition = "opacity 0.5s ease-in-out";
      setTimeout(function () {
        additionalContent.style.opacity = "1";
      }, 100);
      moreLabel.textContent = "Moins";
      chevronIcon.classList.remove("fa-chevron-down");
      chevronIcon.classList.add("fa-chevron-up");

      additionalContent.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      additionalContent.style.opacity = "0";
      moreLabel.textContent = "Plus";
      chevronIcon.classList.remove("fa-chevron-up");
      chevronIcon.classList.add("fa-chevron-down");

      additionalContent.style.transition = "opacity 0.5s ease-in-out";
      setTimeout(function () {
        additionalContent.style.display = "none";
      }, 500);

      const videos = document.querySelectorAll(".video-carousel");
      videos.forEach(function (video) {
        video.pause();
      });
    }
  }
});
