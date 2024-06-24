// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
      item.addEventListener('click', function() {
        // Implement lightbox or modal functionality to display artwork details
      });
    });
  });
  


