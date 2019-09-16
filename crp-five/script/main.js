function debounce (func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

function checkSlide(e) {
    animateImages.forEach(image => {

       
        // half way through the image
        const slideInit = (window.scrollY + window.innerHeight) - image.height/2;
        // bottom of the image
        const imageBottom = image.offsetTop + image.height;

        const isHalfShow = slideInit > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShow && isNotScrolledPast) {
            image.classList.add('active');
        } else {
            image.classList.remove('active')
        }
    });
}

var animateImages = document.querySelectorAll('.ani');

window.addEventListener('scroll', checkSlide);