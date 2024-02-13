document.getElementById('heartContainer').addEventListener('click', function() {
    this.style.animation = 'none'; // Stop the heart's beating animation
    this.style.display = 'none'; // Hide the heart
    document.querySelector('.instruction').style.display = 'none'; // Hide the instruction text

    var envelopeContainer = document.getElementById('envelopeContainer');
    envelopeContainer.style.display = 'block'; // Show the envelope container
    envelopeContainer.style.opacity = 1; // Make sure it's fully visible
    // Apply beating animation to the envelope itself for 2 seconds
    document.getElementById('envelope').style.animation = 'beat 1s 2';

    setTimeout(() => {
        envelopeContainer.classList.add('fade-out'); // Start fading out the envelope container

        setTimeout(() => {
            envelopeContainer.style.display = 'none'; // Hide the envelope container after fade-out
            var messageContainer = document.getElementById('messageContainer');
            messageContainer.style.display = 'block'; // Show the message container

            setTimeout(() => {
                messageContainer.style.opacity = 1; // Fade in the message container
            }, 10); // Ensure display change has taken effect
        }, 1000); // Matches the duration of the fade-out animation
    }, 3000); // Duration envelope is visible and beating
});
