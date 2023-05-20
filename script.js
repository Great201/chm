$(document).ready(function () {
    // Image URLs for different backgrounds
    const backgrounds = [
      "images/christina-wocintechchat-com-c6wbSBaYxkY-unsplash.jpg",
      "images/alex-starnes-tbYPDBChsZU-unsplash.jpg",
      "images/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg",
      "images/terricks-noah-n9R0MN3XGvY-unsplash.jpg",
      "images/pexels-joshua-abner-3605015.jpg",
      "images/unsplash_KfoNVMCFb5M.png"
    ];

    let currentBackgroundIndex = 0;

    // Function to change the background image
    function changeBackground() {
      // Set the new background image with a transition effect
      $(".header").css({
        "background-image":
          "url(" + backgrounds[currentBackgroundIndex] + ")",
        transition: "background-image 1s ease-in-out",
      });

      // Increment the background index
      currentBackgroundIndex++;

      // Wrap around to the first background if index exceeds the length
      if (currentBackgroundIndex >= backgrounds.length) {
        currentBackgroundIndex = 0;
      }
    }

    // Change the background image every 5 seconds
    setInterval(changeBackground, 5000);

    $(".slider-button-prev").click(function () {
      clearInterval(changeBackground); // Stop automatic background changes

      // Decrement the background index
      currentBackgroundIndex--;

      // Wrap around to the last background if index becomes negative
      if (currentBackgroundIndex < 0) {
        currentBackgroundIndex = backgrounds.length - 1;
      }

      // Set the new background image with a transition effect
      $(".header").css({
        "background-image":
          "url(" + backgrounds[currentBackgroundIndex] + ")",
        transition: "background-image 3s ease-in-out",
      });
    });

    $(".slider-button-next").click(function () {
      clearInterval(changeBackground); // Stop automatic background changes

      // Increment the background index
      currentBackgroundIndex++;

      // Wrap around to the first background if index exceeds the length
      if (currentBackgroundIndex >= backgrounds.length) {
        currentBackgroundIndex = 0;
      }

      // Set the new background image with a transition effect
      $(".header").css({
        "background-image":
          "url(" + backgrounds[currentBackgroundIndex] + ")",
        transition: "background-image 3s ease-in-out",
      });
    });
  });