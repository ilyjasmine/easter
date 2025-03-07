document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = 1745004600;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  //var interval = setInterval(() => {
    //let body = document.body;
    //body.classList.toggle('dark-theme');
    //body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    //body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  //}, 5000000);

// Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
