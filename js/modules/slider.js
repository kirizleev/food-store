function slider(){
    const sliderItems = document.querySelectorAll('.offer__slide'),
        sliderPrev = document.querySelector('.offer__slider-prev'),
        sliderNext = document.querySelector('.offer__slider-next'),
        currentSlide = document.querySelector('#current');

    function hideSliderItems(){
        sliderItems.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })
    }

    let slideNum = 0;

    function showSliderItem(slideNum){
        sliderItems[slideNum].classList.add('show', 'fade');
        sliderItems[slideNum].classList.remove('hide');
        let a = currentSlide.innerHTML = slideNum + 1;
        if (a < 10){
            currentSlide.innerHTML = `0${slideNum + 1}`
        }
    }

    hideSliderItems();
    showSliderItem(slideNum);

    sliderPrev.addEventListener('click', () => {
        if (slideNum === 0 ){
            slideNum = sliderItems.length - 1;
            hideSliderItems();
            showSliderItem(slideNum);
        }else{
            slideNum--;
            hideSliderItems();
            showSliderItem(slideNum);
        }
    })

    sliderNext.addEventListener('click', () => {
        if(slideNum === sliderItems.length - 1){
            slideNum = 0;
            hideSliderItems();
            showSliderItem(slideNum);
        }else{
            slideNum++;
            hideSliderItems();
            showSliderItem(slideNum);
        }
    })
}

export default slider;