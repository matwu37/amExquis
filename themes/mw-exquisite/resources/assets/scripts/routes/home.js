export default {
  init() {
    // JavaScript to be fired on the home page
      console.log('This is a front page template.');
      
      $('.front-carousel').slick({
          dots: true,
          speed: 600,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 2000,
          lazyLoad: 'ondemand',
        });
      
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
      
      
  },
};
