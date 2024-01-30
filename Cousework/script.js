document.addEventListener('DOMContentLoaded', function(event) {
  const portfolio = document.querySelector('.portfolio');

  // Event listener for portfolio items
  portfolio.addEventListener('click', function(e) {
      if (e.target.classList.contains('video-thumbnail')) {
          // Display video overlay when video thumbnail is clicked
          const videoOverlay = document.createElement('div');
          videoOverlay.classList.add('video-overlay');
          document.body.appendChild(videoOverlay);

          // Embed video in overlay
          const videoEmbed = document.createElement('iframe');
          videoEmbed.setAttribute('src', 'https://www.youtube.com/embed/DmqZ37icTzo');
          videoEmbed.setAttribute('allowfullscreen', 'true');
          videoOverlay.appendChild(videoEmbed);

          // Disable scrolling when video overlay is active
          document.body.classList.add('no-scroll');

          // Close video overlay when clicked outside
          videoOverlay.addEventListener('click', function() {
              videoOverlay.remove();
              document.body.classList.remove('no-scroll');
          });
      } else if (e.target.nodeName === 'IMG' && !e.target.classList.contains('video-thumbnail')) {
          // Display fullscreen image when image is clicked
          const fullscreenOverlay = document.createElement('div');
          fullscreenOverlay.classList.add('fullscreen-overlay');
          document.body.appendChild(fullscreenOverlay);

          // Clone clicked image and append to overlay
          const clickedImageClone = e.target.cloneNode();
          clickedImageClone.classList.add('fullscreen-image');
          fullscreenOverlay.appendChild(clickedImageClone);

          // Disable scrolling when fullscreen image is active
          document.body.classList.add('no-scroll');

          // Close fullscreen image when clicked outside
          fullscreenOverlay.addEventListener('click', function() {
              fullscreenOverlay.remove();
              document.body.classList.remove('no-scroll');
          });
      }
  });

  // Event listener for contact form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Log form data to console
      const formData = new FormData(contactForm);
      for (const pair of formData.entries()) {
          console.log(pair[0] + ': ' + pair[1]);
      }

      // Reset form after submission
      contactForm.reset();
  });

  // Event listener for YouTube link
  const youtubeLink = document.querySelector('.youtube-link');
  youtubeLink.addEventListener('click', function(event) {
      event.preventDefault();
      window.open(this.href, '_blank'); // Open YouTube link in a new tab
  });
});
