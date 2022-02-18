// бургер меню
const burger = document.querySelector('.burger')
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
    navigation.classList.add('navigation_active')
})

navigationClose.addEventListener('click', () => {
    navigation.classList.remove('navigation_active')
});


// музыка

try {
const mute = document.querySelector('.mute__checkbox');
const audio = new Audio('audio/waterTower.mp3')

const checkMute = () => {
    if (mute.checked) {
        audio.play().catch(() => {
            mute.checked = false
        });
    } else {
        audio.pause();
    }
};

if (mute) {
    setTimeout(checkMute, 2000)
}


mute.addEventListener('change', checkMute)
} catch {
    console.log('на этой странице нет музыки');
}

try {
    const pagination = document.querySelector('.pagination');
    const paginationVideo = document.querySelector('.pagination_video');
    const paginationButton = document.querySelector('.pagination__arrow');
    const videos = document.querySelectorAll('video');
    
    const sliderThumbs = new Swiper('.slider-thumbs', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 7,
    });

sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex);
    if (paginationVideo) {
        paginationVideo.classList.toggle('pagination_active');

        videos[swiper.clickedSlide.dataset.swiperSlideIndex].play()
    }
    })

const sliderMain = new Swiper('.slider-main', {
    loop: true,
    spaceBetween: 10,
    loopedSlides: 7,
    });

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;



sliderMain.on('slideChange', () => {
    for (let i = 0; i < videos.length; i += 1) {
        videos[i].pause();
    }
})




paginationButton.addEventListener('click', () => {
    pagination.classList.toggle('pagination_active')
}) 

} catch {
    console.log('на этой странице нет слайдера');
}