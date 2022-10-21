window.addEventListener('DOMContentLoaded', () => {
    //header에 on붙이고, 스크롤을 내려도 header가 고정되게
    window.addEventListener('scroll', () => {
        let Scroll = window.scrollY;
        Scroll > 0
            ? document.querySelector('header').classList.add('on')
            : document.querySelector('header').classList.remove('on')
    })

    // 상품 좋아요 = 하트 누르면 하트에 색이 표시됨
    //카드 누르면 숫자 증가 수정 전
    // document.querySelector('.heart>a').addEventListener('click', () => {
    //     document.querySelector('.heart').classList.toggle('on');
    //     // document.querySelector('.heart').classList.add('on');
    // });


    // 슬라이드 with swiper
    const MainSlide = new Swiper(".swiper", {
        slidesPerView: 4,
        spaceBetween: 50,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
    });

    // 슬라이드 버튼
    document.querySelector('.main_slide .slide_handler .next').addEventListener('click', () => {
        MainSlide.slideNext()
    });
    document.querySelector('.main_slide .slide_handler .prev').addEventListener('click', () => {
        MainSlide.slidePrev()
    });

    // order에 숫자 올라가게
    let plus = document.querySelectorAll('.add_cart>i');
    let result = document.querySelector('.result');
    console.log(plus)
    let i = 0;

    //카드 누르면 숫자 증가 수정 전
    // plus.forEach.addEventListener('click', () => {
    //     console.log(1111)
    //     i++
    //     result.textContent = i;
    // })


    // 카드 누르면 숫자 증가 (전체 슬라이드에 붙이고 나서 숫자 증가 안 하는 거 수정)
    plus.forEach(it => {
        it.addEventListener('click', () => {
            i++
            result.textContent = i
        })
    });

    // 하트 누르면 색 변하기 (전체 슬라이드에 붙이고 나서 색이 안 변하는 걸 수정)
    let heart = document.querySelectorAll('.heart');
    console.log(heart)
    heart.forEach(it => it.addEventListener('click', () => {
        it.classList.toggle('on')
    }))






    // aos
    AOS.init();

})
