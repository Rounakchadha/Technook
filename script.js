    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY; // Get the current scroll position
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;

      // Calculate grayscale value for background
      const grayscaleValue = Math.floor(scrollPercentage * 255);

      // Update background color
      document.body.style.backgroundColor = `rgb(${255 - grayscaleValue}, ${255 - grayscaleValue}, ${255 - grayscaleValue})`;

      // Update text and link colors
      if (grayscaleValue > 128) {
        document.body.style.color = "white";
        document.querySelectorAll("nav ul li a").forEach(link => {
          link.style.color = "white";
        });
      } else {
        document.body.style.color = "black";
        document.querySelectorAll("nav ul li a").forEach(link => {
          link.style.color = "black";
        });
      }
    });
