document.addEventListener('DOMContentLoaded', function () {
	const slides = document.querySelectorAll('.slide');
	const prevBtn = document.querySelector('.slider-btn.prev');
	const nextBtn = document.querySelector('.slider-btn.next');
	let current = 0;

	function showSlide(idx) {
		slides.forEach((slide, i) => {
			slide.classList.toggle('active', i === idx);
		});
	}

	if (prevBtn && nextBtn) {
		prevBtn.addEventListener('click', function () {
			current = (current - 1 + slides.length) % slides.length;
			showSlide(current);
		});
		nextBtn.addEventListener('click', function () {
			current = (current + 1) % slides.length;
			showSlide(current);
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let current = 0;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
           
            slide.classList.remove('active', 'prev', 'next');
            
            if (i === idx) {
              
                slide.classList.add('active');
                slide.style.animation = 'slideInFromRight 0.8s ease-out';
            } else if (i === idx - 1 || (idx === 0 && i === slides.length - 1)) {
              
                slide.classList.add('prev');
            } else if (i === idx + 1 || (idx === slides.length - 1 && i === 0)) {
               
                slide.classList.add('next');
            }
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function () {
            current = (current - 1 + slides.length) % slides.length;
            showSlideWithDirection(current, 'left');
        });
        nextBtn.addEventListener('click', function () {
            current = (current + 1) % slides.length;
            showSlideWithDirection(current, 'right');
        });
    }
    
    function showSlideWithDirection(idx, direction) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'slide-in-left', 'slide-in-right');
            slide.style.animation = 'none';
            
            if (i === idx) {
                slide.classList.add('active'); 
            
                slide.offsetHeight;
            
                setTimeout(() => {
                    if (direction === 'left') {
                        slide.style.animation = 'slideInFromLeft 0.8s ease-out';
                    } else {
                        slide.style.animation = 'slideInFromRight 0.8s ease-out';
                    }
                }, 10);
            }
        });
    }
});