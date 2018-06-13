import lozad from 'lozad';

export default {
  init() {
    // JavaScript to be fired on all pages
      const observer = lozad('.lozad', {
        rootMargin: '500px 0px',
        threshold: 0.1,
        load: function(el) {
            el.src = el.dataset.src;
        },
        });
      observer.observe();
      
      $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
      });
      
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
        if ('serviceWorker' in navigator) {
          // Use the window load event to keep the page load performant
          window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js');
          });
        }
      
      
      
  },
};
