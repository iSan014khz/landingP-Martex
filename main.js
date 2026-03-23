  function scrollToSlide(index) {
    const carousel = document.getElementById('report-carousel');
    const slideWidth = carousel.offsetWidth;
    carousel.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
 
    document.getElementById('dot-0').classList.toggle('bg-primary-fixed',  index === 0);
    document.getElementById('dot-0').classList.toggle('opacity-100',        index === 0);
    document.getElementById('dot-0').classList.toggle('bg-white/20',        index !== 0);
    document.getElementById('dot-0').classList.toggle('opacity-50',         index !== 0);
 
    document.getElementById('dot-1').classList.toggle('bg-primary-fixed',  index === 1);
    document.getElementById('dot-1').classList.toggle('opacity-100',        index === 1);
    document.getElementById('dot-1').classList.toggle('bg-white/20',        index !== 1);
    document.getElementById('dot-1').classList.toggle('opacity-50',         index !== 1);
  }
 
  // Auto-play opcional
  let current = 0;
  setInterval(() => {
    current = (current + 1) % 2;
    scrollToSlide(current);
  }, 4000);