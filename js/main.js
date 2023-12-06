$(document).ready(function() {
  // Function to update the countdown timer
  function updateCountdown() {
    const targetDate = new Date("2023-12-31T23:59:00-05:00");
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
    
    if (timeDifference <= 0) {
      // If the target date has passed, display a message
      $(".time").text("Countdown expired");
      clearInterval(timerInterval);
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
      const formattedTime = `${String(days).padStart(2, "0")}:${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      $(".time").text(formattedTime);
    }
  }
  
  // Call the updateCountdown function once to display the initial countdown
  updateCountdown();
  
  // Update the countdown timer every second
  const timerInterval = setInterval(updateCountdown, 1000); // Update every 1000 milliseconds (1 second)
});

// $(".accordion-content").css("display", "none");
$(document).ready(function () {
  $("#testimonial-first").slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,

          infinite: true,
          cssEase: "linear",
        },
      },
    ],
  });
  $("#testimonial-second").slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          infinite: true,
          cssEase: "linear",
        },
      },
    ],
  });
});

$(document).on("click", ".read-more-link", function () {
  var $contentToggle = $(this).closest(".content-toggle");
  var $readMoreText = $contentToggle.find(".read-more-text");
  var $threedots = $contentToggle.find(".three-dots");
  var isActive = $(this).hasClass("active");
  var readIcon = $(".readmore__toggle");
  $readMoreText.slideToggle();
  $threedots.toggle();
  $(this)
    .toggleClass("active", !isActive)
    .text(isActive ? "Read more" : " Read less");
});