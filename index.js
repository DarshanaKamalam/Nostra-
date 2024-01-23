document.addEventListener('DOMContentLoaded', function () {
    const textBar = document.getElementById('textBar');
    const closeButton = document.getElementById('closeButton');

    // Show the text bar
    textBar.classList.remove('hidden');

    // Close the text bar when the close button is clicked
    closeButton.addEventListener('click', function () {
      textBar.style.display = 'none';
    });
  });

  let slideIndex = 1;

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Call showSlides to display the first image initially
  showSlides(slideIndex);

  const imagePanel = document.querySelector('.image-panel');

  imagePanel.addEventListener('wheel', function (event) {
    event.preventDefault();

    if (event.deltaY > 0) {
      // Scrolling down, move images to the left
      imagePanel.scrollLeft += 10;
    } else {
      // Scrolling up, move images to the right
      imagePanel.scrollLeft -= 10;
    }
  });
