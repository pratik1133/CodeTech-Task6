// Search functionality for courses
document.getElementById("search").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const courseCards = document.querySelectorAll(".course-card");
    
    courseCards.forEach(function(card) {
      const courseTitle = card.querySelector("h3").textContent.toLowerCase();
      if (courseTitle.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
  document.querySelector(".btn").onclick = function () {
    
    
  }
  function playVideo() {
    // Show the video section
    document.getElementById("video-player-section").style.display = "block";
  
    // Set the video URL
    const videoUrl = "https://www.youtube.com/embed/-kGMwaROIZk?enablejsapi=1";
    const videoIframe = document.getElementById("course-video");
    videoIframe.src = videoUrl;
  
    // Track video progress
    const videoProgress = document.getElementById("video-progress");
    const progressText = document.getElementById("progress-text");
  
    // Simulate progress tracking (since tracking YouTube progress requires additional APIs)
    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
      } else {
        progress += 1; // Increment progress
        videoProgress.value = progress;
        progressText.innerText = `${progress}% Completed`;
      }
    }, 2000); // Simulates 2 seconds for each progress increment
  }
  
  
