document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({ duration: 800, easing: 'ease-in-out' });

  // Toggle letter content
  const btn = document.getElementById('toggleLetter');
  const letter = document.getElementById('letterContent');

  if (btn && letter) {
    btn.addEventListener('click', () => {
      // Stop the bounce animation
      btn.classList.remove('animate-bounce');

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
  }

  // Flip teacher cards on scroll into view (initial flip, then allow hover)
  const cards = document.querySelectorAll('.card');
  const flipDuration = 5000; // 5 seconds

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains('flipped-once')
        ) {
          // Temporarily disable hover flipping
          entry.target.classList.add('flipped', 'flipped-once', 'no-hover-flip');
          // Remove hover flipping by adding a class
          entry.target.style.pointerEvents = 'none';
          setTimeout(() => {
            entry.target.classList.remove('flipped', 'no-hover-flip');
            entry.target.style.pointerEvents = '';
          }, flipDuration);
          // Only trigger once per card
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  cards.forEach((card) => observer.observe(card));
});
