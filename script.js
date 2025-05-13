document.addEventListener('DOMContentLoaded', () => {
    // AOS and chart init
    AOS.init({ duration: 800, easing: 'ease-in-out' });
    const ctx = document.getElementById('statsChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar', data: { labels: ['BUET', 'Medical', 'Public Universities'], datasets: [{ label: 'শিক্ষার্থীর সংখ্যা (হাজারে)', data: [4.1, 4.5, 50], backgroundColor: '#06b6d4' }] }, options: { scales: { y: { beginAtZero: true } } }
    });
  
    // Toggle letter content
    const btn = document.getElementById('toggleLetter');
    const letter = document.getElementById('letterContent');
    btn.addEventListener('click', () => {
      letter.classList.toggle('hidden');
      gsap.to(letter, { opacity: 1, duration: 0.5, display: letter.classList.contains('hidden') ? 'none' : 'block' });
    });
  });
  