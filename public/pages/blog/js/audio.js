import $ from "jquery";
$(document).ready(function () {
  const audio = new Audio("/blog_audio.mp3");
  const playButton = $("#play-button");
  const progressBar = $("#progress-bar");

  let isPlaying = false;

  playButton.on("click", function () {
    if (isPlaying) {
      audio.pause();
      playButton
        .find("img")
        .attr("src", "https://cdn-icons-png.flaticon.com/512/727/727245.png");
    } else {
      audio.play();
      playButton
        .find("img")
        .attr("src", "https://cdn-icons-png.flaticon.com/512/727/727269.png");
    }
    isPlaying = !isPlaying;
  });

  audio.addEventListener("timeupdate", function () {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.css("width", `${progress}%`);
  });

  audio.addEventListener("ended", function () {
    progressBar.css("width", "0%");
    playButton
      .find("img")
      .attr("src", "https://cdn-icons-png.flaticon.com/512/727/727245.png");
    isPlaying = false;
  });
});
