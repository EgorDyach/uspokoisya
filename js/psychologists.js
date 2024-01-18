import { Modal } from "../js/modal.js";
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-form').addEventListener('click', () => {
        document.getElementById('add-form').setAttribute('disabled', '')
    })
    const tel = document.getElementById('tel')
    let im = new Inputmask("+7(999) 999-99-99")
    im.mask(tel)
    const modal = new Modal({
        isOpen: (modal) => {
        },
        isClose: () => {
        },
    });

    let tabsBtns = document.querySelectorAll('.psyPrice__btn')
    tabsBtns.forEach(function (tabsbtn) {
        tabsbtn.addEventListener('click', function (e) {
            const path = e.currentTarget.dataset.pricepath;
            tabsBtns.forEach(function (btn) {
                btn.classList.remove('stages__btn-active')
            });
            let tabsArr = [...tabsBtns]
            e.currentTarget.classList.add('stages__btn-active');
            let numActive = tabsArr.indexOf(e.currentTarget)
            const swiperNav  =  document.querySelector('.swiper-span')
            swiperNav.style.left = `${numActive*25.1}%`
            document.querySelectorAll('.price-info').forEach(function (tabsbtn) {
                tabsbtn.classList.remove('stages__info-active')
            });
            document.querySelector(`[data-pricetarget="${path}"]`).classList.add(`stages__info-active`)
        });
    });
})