import { matrixTest } from './testMatrix.js';
import { Modal } from './modal.js';
import {quations} from './testProQuestions.js';
document.addEventListener('DOMContentLoaded', function () {
    const mainTest = document.querySelector('.mainTest .container');
    const testBtn = document.querySelector('.mainTest__link');
    let count = 0
    let firstAnswer = ''
    let secondAnswer = ''
    let thirdAnswer = ''
    let previous = ''
    let reiting = 0.0
    const $test = document.createElement('div');
    const $quation = document.createElement('h2');
    const $inputYes = document.createElement('input');
    const $inputNo = document.createElement('input');
    const $inputMb = document.createElement('input');
    const $backBtn = document.createElement('button');
    const $nextBtn1 = document.createElement('button');
    const $nextBtn2 = document.createElement('button');
    const $nextBtn3 = document.createElement('button');
    let $inputMbDiv = document.createElement('div');
    let $inputNoDiv = document.createElement('div');
    let $inputYesDiv = document.createElement('div');
    let $countText = document.createElement('h3');
    const $testBottom = document.createElement('div');


    const $resultTitle = document.createElement('h2');
    const $resultText = document.createElement('p');
    const $resultdiv = document.createElement('div');
    const $resultImg = document.createElement('img')
    const $resultProgressCon = document.createElement('div');
    const $resultReiting = document.createElement('h3');
    const $resultSpan = document.createElement('span');
    const $resultLinks = document.createElement('div');
    const $resultLink = document.createElement('button');
    const $resultTest2 = document.createElement('a')


    const $ProTestTitle = document.createElement('h2')
    const $ProTestText = document.createElement('p');
    const $ProTestStart = document.createElement('button')
    $resultProgressCon.append($resultSpan)
    $resultLinks.append($resultLink, $resultTest2)
    $resultdiv.append($resultTitle, $resultText, $resultReiting,$resultProgressCon, $resultImg, $resultLinks)
    testBtn.addEventListener('click', function () {
        mainTest.innerHTML = ''
        count++;
        $countText.textContent = `${count} / 3`
        $countText.classList = 'countTitle'
        $backBtn.textContent = 'Назад';
        $backBtn.classList = 'backBtn btn-reset bottomBtn'
        $backBtn.setAttribute('disabled', '');

        $nextBtn1.textContent = 'Далее';
        $nextBtn1.classList = 'nextBtn btn-reset bottomBtn'
        $nextBtn1.setAttribute('disabled', '');

        $nextBtn2.textContent = 'Далее';
        $nextBtn2.classList = 'nextBtn btn-reset bottomBtn'
        $nextBtn2.setAttribute('disabled', '');
        $nextBtn2.style.display = 'none'

        $nextBtn3.textContent = 'Далее';
        $nextBtn3.classList = 'nextBtn btn-reset bottomBtn'
        $nextBtn3.setAttribute('disabled', '');
        $nextBtn3.style.display = 'none'

        $inputYes.setAttribute('name', 'r1');
        $inputYes.setAttribute('type', 'radio');
        $inputYes.setAttribute('value', 'Yes');
        $inputYes.classList = 'inputRadio';
        $inputYes.addEventListener('input', function () {
            $nextBtn1.removeAttribute('disabled')
            $nextBtn2.removeAttribute('disabled')
            $nextBtn3.removeAttribute('disabled')
        })

        $inputNo.setAttribute('name', 'r1');
        $inputNo.setAttribute('type', 'radio');
        $inputNo.setAttribute('value', 'No');
        $inputNo.classList = 'inputRadio';
        $inputNo.addEventListener('input', function () {
            $nextBtn1.removeAttribute('disabled')
            $nextBtn2.removeAttribute('disabled')
            $nextBtn3.removeAttribute('disabled')
        })

        $inputMb.setAttribute('name', 'r1');
        $inputMb.setAttribute('type', 'radio');
        $inputMb.setAttribute('value', 'Mb');
        $inputMb.classList = 'inputRadio';
        $inputMb.addEventListener('input', function () {
            $nextBtn1.removeAttribute('disabled')
            $nextBtn2.removeAttribute('disabled')
            $nextBtn3.removeAttribute('disabled')
        })

        $backBtn.addEventListener('click', function () {
            count--;
        })

        $nextBtn1.addEventListener('click', function () {
            count++;
            var rad = document.getElementsByName('r1');
            for (var i = 0; i < rad.length; i++) {
                if (rad[i].checked) {
                    if (i == 0) {
                        firstAnswer = 'yes'
                    } else if (i == 1) {
                        firstAnswer = 'no'
                    } else {
                        firstAnswer = 'mb'
                    }
                }
            }
        })

        $nextBtn2.addEventListener('click', function () {
            count++;
            var rad = document.getElementsByName('r1');
            for (var i = 0; i < rad.length; i++) {
                if (rad[i].checked) {
                    if (i == 0) {
                        secondAnswer = 'yes'
                    } else if (i == 1) {
                        secondAnswer = 'no'
                    } else {
                        secondAnswer = 'mb'
                    }
                }
            }
        })

        $nextBtn3.addEventListener('click', function () {
            count++;
            var rad = document.getElementsByName('r1');
            for (var i = 0; i < rad.length; i++) {
                if (rad[i].checked) {
                    if (i == 0) {
                        thirdAnswer = 'yes'
                    } else if (i == 1) {
                        thirdAnswer = 'no'
                    } else {
                        thirdAnswer = 'mb'
                    }
                }
            }
        })

        $inputYesDiv.classList = 'inputYesDiv inputDiv';
        $inputYesDiv.append($inputYes, 'Да, и практикую часто.');

        $inputNoDiv.classList = 'inputNoDiv inputDiv';
        $inputNoDiv.append($inputNo, 'Нет, и никогда не кричал на своего близкого.');

        $inputMbDiv.classList = 'inputMbDiv inputDiv';
        $inputMbDiv.append($inputMb, 'Да, но только если есть за что.');

        mainTest.classList.add('mainTestCon')

        $quation.classList.add('test-quation');
        $test.classList = 'flex test';
        $testBottom.classList = 'flex testBottom';
        $test.append($quation, $inputYesDiv, $inputNoDiv, $inputMbDiv)
        $testBottom.append($backBtn, $countText, $nextBtn1, $nextBtn2, $nextBtn3)
        mainTest.append($test, $testBottom)
        firstQuation()
    })
    function firstQuation() {
        $backBtn.disabled = true
        $inputNo.checked = false
        $inputYes.checked = false
        $inputMb.checked = false
        firstAnswer = ''
        $nextBtn1.setAttribute('disabled', '')
        $quation.textContent = 'Вы кричали на своего близкого за последний месяц?'
        $countText.textContent = `${count} / 3`
        $nextBtn1.style.display = 'block'
        $nextBtn2.style.display = 'none'
        $nextBtn3.style.display = 'none'
        $backBtn.removeEventListener('click', firstQuation)
        $nextBtn1.addEventListener('click', secondQuation)
    }

    function secondQuation() {
        $nextBtn1.style.display = 'none'
        $nextBtn2.style.display = 'block'
        $nextBtn3.style.display = 'none'

        $backBtn.removeEventListener('click', firstQuation)
        $backBtn.removeEventListener('click', secondQuation)
        $backBtn.removeEventListener('click', ThirdQuation)
        $backBtn.addEventListener('click', firstQuation)
        secondAnswer = ''
        $quation.textContent = 'Обижались ли вы на членов вашей семьи, или случались ли ссоры за последний месяц?'
        $inputYesDiv.textContent = ''
        $inputYesDiv.append($inputYes, 'Да, такое случается регулярно.')
        $inputMbDiv.textContent = ''
        $inputMbDiv.append($inputMb, 'Да, но такое происходит редко.')
        $inputNoDiv.textContent = ''
        $inputNoDiv.append($inputNo, 'Нет, мы никогда не ругаемся.')
        $inputNo.checked = false
        $inputYes.checked = false
        $inputMb.checked = false
        $backBtn.removeAttribute('disabled')
        $nextBtn2.setAttribute('disabled', '')
        $countText.textContent = `${count} / 3`
        $nextBtn2.addEventListener('click', ThirdQuation);
    }

    function ThirdQuation() {
        $backBtn.removeEventListener('click', firstQuation)
        $backBtn.removeEventListener('click', secondQuation)
        $backBtn.removeEventListener('click', ThirdQuation)
        $backBtn.addEventListener('click', secondQuation)
        thirdAnswer = ''
        $inputNo.checked = false
        $inputMb.checked = false
        $inputYes.checked = false
        $nextBtn1.style.display = 'none'
        $nextBtn2.style.display = 'none'
        $nextBtn3.style.display = 'block'
        $inputYesDiv.textContent = ''
        $inputYesDiv.append($inputYes, 'Да, меня раздражает всё подряд.')
        $inputMbDiv.textContent = ''
        $inputMbDiv.append($inputMb, 'Такое иногда случается.')
        $inputNoDiv.textContent = ''
        $inputNoDiv.append($inputNo, 'Нет, меня всё устраивает и я счастлив.')
        $backBtn.removeAttribute('disabled')
        $nextBtn3.setAttribute('disabled', '')
        $countText.textContent = `${count} / 3`
        $quation.textContent = 'Чувствуете что Вас многое раздражает и мало что радует?'
        $nextBtn3.addEventListener('click', showResult)
    }

    function showResult() {
        reiting = matrixTest(firstAnswer, secondAnswer, thirdAnswer)
        mainTest.innerHTML = '';
        $resultTitle.classList = 'result__title'
        $resultText.classList = 'result__text'
        $resultdiv.classList = 'result__div flex'
        $resultSpan.classList = 'result__span'
        $resultReiting.classList ='result__reiting'
        $resultProgressCon.classList = 'result__progressCon'
        let widthRes = `${(reiting) * 20}%`
        console.log(reiting)
        $resultSpan.style.setProperty('width', widthRes);
        $resultSpan.style.setProperty('content', reiting)
        $resultReiting.textContent = `Ваш психорейтинг: ${reiting}`
        $resultTest2.textContent = 'Пройти более точный тест'
        $resultTest2.addEventListener('click', TestPro)
        $resultTest2.classList = 'btn-reset result__link'
        $resultLinks.classList = 'result__links'
        $resultLink.textContent = 'Оставить заявку на бесплатную консультацию'
        $resultLink.dataset.path = 'modal'
        $resultLink.classList = 'btn-reset result__link'
        if (reiting < 3) {
            resultToCall()
        } else {
            resultToTest2()
        }
        mainTest.append($resultdiv)
    }
    
    function ProResult(counterYes) {
        let Psyreiting = 5 - counterYes*0.125
        mainTest.innerHTML = ''
        const $ProResultTitle = document.createElement('h2')
        const $ProResultPsyreit = document.createElement('h3')
        const $ProResultText = document.createElement('p')
        $ProResultPsyreit.textContent = Psyreiting
        $ProResultTitle.classList = 'result__title'
        $ProResultText.classList = 'result__text'
        $resultSpan.classList = 'result__span'
        $ProResultPsyreit.classList ='result__reiting'
        $resultProgressCon.classList = 'result__progressCon'
        let widthRes = `${(Psyreiting) * 20}%`
        $resultSpan.style.setProperty('width', widthRes);
        $resultSpan.style.setProperty('content', Psyreiting)
        $ProResultPsyreit.textContent = `Ваш психорейтинг: ${Psyreiting}`
        if(Psyreiting >4.5) {
            $ProResultTitle.textContent = 'Вы великолепен! У вас один из самых высоких психорейтингов!'
            $ProResultText.textContent = `Вы точно победите в "Успокойся!", записывайтесь на бесплатную консультацию и выиграйте 300 000 рублей!`
        } else if (Psyreiting <= 4.5 && Psyreiting > 4) {
            $ProResultTitle.textContent = 'Вы молодец! У вас хороший психорейтинг!'
            $ProResultText.textContent = `Ваши шансы на победу в "Успокойся!" высоки! Запишитесь на бесплатную консультацию и выиграйте 300 000 рублей!`
        } else if (Psyreiting <= 4 && Psyreiting > 3.1) {
            $ProResultTitle.textContent = 'Ваш психорейтинг низкий!'
            $ProResultText.textContent = `Но мы можем это исправить вместе! Запишитесь на бесплатную консультацию, поучаствуйте в игре "Успокойся!" и выиграйте 300 000 рублей у таких же как и вы!`
        } else if (Psyreiting <= 3.1 && Psyreiting >= 2.125) {
            $ProResultTitle.textContent = 'У вас ужасно низкий психорейтинг!'
            $ProResultText.textContent = `Но мы можем помочь вам с этим! Запишитесь на бесплатную консультацию и мы с вами найдем выход!`
        } else {
            $ProResultTitle.textContent = 'Ааааа, вы шизоид и невротик!!!'
            $ProResultText.textContent = `Идите к психотерапевту, удалите наши номера, забудьте об "Успокойся!" и лечитесь!!!`
        }
        
        mainTest.append($ProResultTitle, $ProResultText, $ProResultPsyreit,$resultProgressCon, $resultImg, $resultLink)
    }

    function TestPro() {
        mainTest.innerHTML = '';
        $ProTestTitle.textContent = 'Более точный тест на определение психорейтинга'
        $ProTestTitle.classList = 'result__title'
        $ProTestText.classList = 'result__text'
        $ProTestText.textContent = 'Вам представлен перечень утверждений. На каждое утверждение ответьте «да», если Вы с ним согласны (считаете его верным по отношению к себе) или «нет», если Вы с ним не согласны.'
        $ProTestStart.classList = 'btn-reset ProTest__start result__link'
        $ProTestStart.textContent = 'Начать тест'

        $ProTestStart.addEventListener('click', function() {
            mainTest.innerHTML = ''
            const $ProTestQuation = document.createElement('h2')
            const $ProTestYes = document.createElement('button')
            const $ProTestNo = document.createElement('button')
            const $ProTestCount = document.createElement('span')
            $ProTestCount.classList = 'countTitle'
            let counterYes = 0
            let index = 1
            $ProTestCount.textContent = `${index}/40`
            $ProTestYes.textContent = 'Да'
            $ProTestYes.classList = 'inputYesDiv inputDiv'
            $ProTestNo.textContent = 'Нет'
            $ProTestNo.classList = 'inputNoDiv inputDiv'
            $ProTestQuation.textContent = quations[index]
            $ProTestQuation.classList = 'test-quation'
            $ProTestYes.addEventListener('click', function() {
                if (index < 40) {
                    counterYes++;
                    index++;
                    $ProTestQuation.textContent = quations[index]
                    $ProTestCount.textContent = `${index}/40`
                } else {
                    ProResult(counterYes)
                }
            })

            $ProTestNo.addEventListener('click', function() {
                if (index < 40) {
                    index++;
                    $ProTestQuation.textContent = quations[index]
                    $ProTestCount.textContent = `${index}/40`
                } else {
                    ProResult(counterYes)
                }
            })
            mainTest.append($ProTestQuation, $ProTestYes, $ProTestNo,$ProTestCount)
        })

        mainTest.append($ProTestTitle, $ProTestText, $ProTestStart)
    }

    function resultToTest2() {
        $resultTitle.textContent = 'Вы молодец! У вас отличный психорейтинг! Но... не самообман ли это?'
        $resultText.textContent = 'Оставьте заявку, и вы сможете проверить это на бесплатной консультации с психологом!'
        // $resultImg.src = '../img/test__like.svg'
    }
    function resultToCall() {
        $resultTitle.textContent = 'О нет! Ваш психорейтинг слишком низкий...'
        $resultText.textContent = 'Но мы можем это исправить вместе! Записывайтесь на бесплатную консультацию с психологом, или '
        // $resultImg.src = '../img/test__dislike.svg'
    }

    const modal = new Modal({
        isOpen: (modal) => {
        },
        isClose: () => {
        },
    });
    
    const tel = document.getElementById('tel')
    let im = new Inputmask("+7(999) 999-99-99")
    im.mask(tel)
})