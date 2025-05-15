document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({ duration: 800, easing: 'ease-in-out' });

  // Toggle letter content
  const btn = document.getElementById('toggleLetter');
  const letter = document.getElementById('letterContent');

  btn.addEventListener('click', () => {
    if (letter.classList.contains('hidden')) {
      // Show the content
      letter.classList.remove('hidden');
      gsap.fromTo(
        letter,
        { opacity: 0, height: 0 },
        { opacity: 1, height: 'auto', duration: 0.5 }
      );
    } else {
      // Hide the content
      gsap.to(letter, {
        opacity: 0,
        height: 0,
        duration: 0.5,
        onComplete: () => letter.classList.add('hidden'),
      });
    }
  });
});
