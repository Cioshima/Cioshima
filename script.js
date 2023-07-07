// Add functionality to the website (e.g., event handling, dynamic content)
// For this example, let's change the page title when the user clicks on the "Home" link

document.addEventListener('DOMContentLoaded', function() {
  const homeLink = document.querySelector('nav ul li:nth-child(1) a');

  homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.title = 'Home - My Website';
  });
});
