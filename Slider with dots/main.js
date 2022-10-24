function Slider({ nextBtnSelector, prevBtnSelector, listSelector, dotsSelector }) {
    const nextBtn = document.querySelector(nextBtnSelector);
    const prevBtn = document.querySelector(prevBtnSelector);
    const list = document.querySelector(listSelector);
    const dots = document.querySelector(dotsSelector);

    this.changeItem = function ({ active, newElement }) {
            if (newElement) {
                active.classList.remove('active');
                newElement.classList.add('active');
            }
    };

    function btnNotActive() {
        const activeLi = list.querySelector('.active');

        if (!activeLi.previousElementSibling) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }

        if (!activeLi.nextElementSibling) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }
    btnNotActive();

    nextBtn.addEventListener('click', () => {
        const activeLi = list.querySelector('.active');
        const activeDot = dots.querySelector('.active');
        this.changeItem({
            newElement: activeLi.nextElementSibling,
            active: activeLi,
        });
        this.changeItem({
            newElement: activeDot.nextElementSibling,
            active: activeDot,
        });

    btnNotActive();
});

    prevBtn.addEventListener('click', () => {
        const activeLi = list.querySelector('.active');
        const activeDot = dots.querySelector('.active');
        this.changeItem({
            newElement: activeLi.previousElementSibling,
            active: activeLi,
        });
        this.changeItem({
            newElement: activeDot.previousElementSibling,
            active: activeDot,
        });
        btnNotActive();
});
}

let slider1 = new Slider({
        nextBtnSelector: '.js--slider__next',
        prevBtnSelector: '.js--slider__prev',
        listSelector: '.js--list',
        dotsSelector: '.dots__container'
});
