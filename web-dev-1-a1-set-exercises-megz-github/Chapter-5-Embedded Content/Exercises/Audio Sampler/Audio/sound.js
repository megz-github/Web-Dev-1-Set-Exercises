document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', function() {
        const sound = this.getAttribute('data-sound');
        const audio = document.getElementById('audio');
        audio.src = sound;
        audio.play();
    });
});
