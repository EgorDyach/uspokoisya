import { matrixTest } from './testMatrix.js';
import { Modal } from './modal.js';
import {quations} from './testProQuestions.js';

function uncheckAll(currentCheckbox) {
    var checkboxes = document.getElementsByName('option');
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== currentCheckbox) {
        checkboxes[i].checked = false;
        checkboxes[i].parentNode.style.backgroundColor = 'blue'; // Возврат синего заднего фона
      } else {
        console.log(currentCheckbox.parentNode)
        currentCheckbox.parentNode.style.backgroundColor = currentCheckbox.checked ? 'red' : 'blue'; // Установка красного или синего заднего фона
      }
    }
  }

document.addEventListener('DOMContentLoaded', function () {
    const mainTest = document.querySelector('.mainTest .container');
    mainTest.classList='container testContainer'
    const testBtn = document.querySelector('.mainTest__link');
    let count = 0
    let firstAnswer = ''
    let secondAnswer = ''
    let thirdAnswer = ''
    let previous = ''
    let reiting = 0.0
    const $test = document.createElement('div');
    const $quation = document.createElement('h2');
    const $inputsDiv = document.createElement('div');
    const $inputYes = document.createElement('input');
    const $inputNo = document.createElement('input');
    const $inputMb = document.createElement('input');
    const $backBtn = document.createElement('button');
    const $nextBtn1 = document.createElement('button');
    const $nextBtn2 = document.createElement('button');
    const $nextBtn3 = document.createElement('button');
    const $inputMbLabel = document.createElement('label');
    const $inputNoLabel = document.createElement('label');
    const $inputYesLabel = document.createElement('label');
    const $countText = document.createElement('h3');
    const $testBottom = document.createElement('div');
    const $inputYesSpan = document.createElement('span');
    const $inputNoSpan = document.createElement('span');
    const $inputMbSpan = document.createElement('span');

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
        $inputYes.addEventListener('click', function() {
           $inputYesLabel.classList = 'inputYesDiv inputDiv checked'
            $inputMbLabel.classList = 'inputMbDiv inputDiv'
            $inputNoLabel.classList = 'inputNoDiv inputDiv'
        })
        $inputYes.addEventListener('input', function () {
            $nextBtn1.removeAttribute('disabled')
            $nextBtn2.removeAttribute('disabled')
            $nextBtn3.removeAttribute('disabled')
        })
        $inputYesSpan.classList = 'inputSpan'

        $inputNo.setAttribute('name', 'r1');
        $inputNo.setAttribute('type', 'radio');
        $inputNo.setAttribute('value', 'No');
        $inputNo.classList = 'inputRadio';
        $inputNo.addEventListener('change', function() {
            $inputYesLabel.classList = 'inputYesDiv inputDiv'
            $inputMbLabel.classList = 'inputMbDiv inputDiv'
            $inputNoLabel.classList = 'inputNoDiv inputDiv checked'
        })
        $inputNo.addEventListener('input', function () {
            $nextBtn1.removeAttribute('disabled')
            $nextBtn2.removeAttribute('disabled')
            $nextBtn3.removeAttribute('disabled')
        })
        $inputNoSpan.classList = 'inputSpan'

        $inputMb.setAttribute('name', 'r1');
        $inputMb.setAttribute('type', 'radio');
        $inputMb.setAttribute('value', 'Mb');
        $inputMb.classList = 'inputRadio';
        $inputMb.addEventListener('change', function() {
            $inputYesLabel.classList = 'inputYesDiv inputDiv'
            $inputMbLabel.classList = 'inputMbDiv inputDiv checked'
            $inputNoLabel.classList = 'inputNoDiv inputDiv'
        })
        $inputMb.addEventListener('input', function () {
            $nextBtn1.removeAttribute('disabled')
            $nextBtn2.removeAttribute('disabled')
            $nextBtn3.removeAttribute('disabled')
        })
        $inputMbSpan.classList = 'inputSpan'

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

        $inputYesLabel.classList = 'inputYesDiv inputDiv';
        $inputYesLabel.append($inputYes,$inputYesSpan, 'Да, и практикую часто.');

        $inputNoLabel.classList = 'inputNoDiv inputDiv';
        $inputNoLabel.append($inputNo, $inputNoSpan, 'Нет, и никогда не кричал на своего близкого.');

        $inputMbLabel.classList = 'inputMbDiv inputDiv';
        $inputMbLabel.append($inputMb, $inputMbSpan,'Да, но только если есть за что.');

        mainTest.classList.add('mainTestCon')

        $quation.classList.add('test-quation');
        $inputsDiv.classList = 'flex inputsDiv'
        $test.classList = 'flex test';
        $testBottom.classList = 'flex testBottom';
        $inputsDiv.append($inputYesLabel, $inputNoLabel, $inputMbLabel);
        
        $test.append($quation, $inputsDiv)
        $testBottom.append($backBtn, $countText, $nextBtn1, $nextBtn2, $nextBtn3)
        mainTest.append($test, $testBottom)
        firstQuation()
    })
    function firstQuation() {
        $inputYesLabel.classList = 'inputYesDiv inputDiv'
        $inputMbLabel.classList = 'inputMbDiv inputDiv'
        $inputNoLabel.classList = 'inputNoDiv inputDiv'
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
        $inputYesLabel.classList = 'inputYesDiv inputDiv'
        $inputMbLabel.classList = 'inputMbDiv inputDiv'
        $inputNoLabel.classList = 'inputNoDiv inputDiv'
        $backBtn.removeEventListener('click', firstQuation)
        $backBtn.removeEventListener('click', secondQuation)
        $backBtn.removeEventListener('click', ThirdQuation)
        $backBtn.addEventListener('click', firstQuation)
        secondAnswer = ''
        $quation.textContent = 'Обижались ли вы на членов вашей семьи, или случались ли ссоры за последний месяц?'
        $inputYesLabel.textContent = ''
        $inputYesLabel.append($inputYes,$inputYesSpan, 'Да, такое случается регулярно.')
        $inputMbLabel.textContent = ''
        $inputMbLabel.append($inputMb,$inputMbSpan, 'Да, но такое происходит редко.')
        $inputNoLabel.textContent = ''
        $inputNoLabel.append($inputNo, $inputNoSpan, 'Нет, мы никогда не ругаемся.')
        $inputNo.checked = false
        $inputYes.checked = false
        $inputMb.checked = false
        $backBtn.removeAttribute('disabled')
        $nextBtn2.setAttribute('disabled', '')
        $countText.textContent = `${count} / 3`
        $nextBtn2.addEventListener('click', ThirdQuation);
    }

    function ThirdQuation() {
        $inputYesLabel.classList = 'inputYesDiv inputDiv'
        $inputMbLabel.classList = 'inputMbDiv inputDiv'
        $inputNoLabel.classList = 'inputNoDiv inputDiv'
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
        $inputYesLabel.textContent = ''
        $inputYesLabel.append($inputYes,$inputYesSpan, 'Да, меня раздражает всё подряд.')
        $inputMbLabel.textContent = ''
        $inputMbLabel.append($inputMb,$inputMbSpan, 'Такое иногда случается.')
        $inputNoLabel.textContent = ''
        $inputNoLabel.append($inputNo,$inputNoSpan, 'Нет, меня всё устраивает и я счастлив.')
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
        $resultSpan.style.setProperty('margin-left', widthRes);
        $resultSpan.style.setProperty('content', reiting)
        $resultReiting.textContent = `Ваш психорейтинг: ${reiting}`
        $resultTest2.textContent = 'Пройти точный тест'
        $resultTest2.addEventListener('click', TestPro)
        $resultTest2.classList = 'btn-reset result__link'
        $resultLinks.classList = 'result__links'
        $resultLink.textContent = 'Оставить заявку'
        $resultLink.dataset.path = 'modal'
        $resultLink.classList = 'btn-reset result__link'
        resultToCall(reiting)
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
        $resultSpan.style.setProperty('margin-left', widthRes);
        $resultSpan.style.setProperty('content', Psyreiting)
        $ProResultPsyreit.textContent = `Ваш психорейтинг: ${Psyreiting}`
        if(Psyreiting >4.5) {
            $ProResultTitle.textContent = 'Поздравляю! Ты живешь счастливой жизнью!'
            $ProResultText.textContent = `Зарази своим состоянием как можно больше людей!`
        } else if (Psyreiting <= 4.5 && Psyreiting >= 4) {
            $ProResultTitle.textContent = 'Ты почти счастливый человек.'
            $ProResultText.textContent = `Но это "почти" может не изменится никогда, если ты не научишься работать со своим умом и управлять им. Путь к счастью займет немного времени, если ты захочешь.`
        } else if (Psyreiting < 4 && Psyreiting >= 3) {
            $ProResultTitle.textContent = 'Ты по большей части несчастен.'
            $ProResultText.textContent = `Тебя редко что-то радует. Если захочешь, счастья может быть больше, но придется отказаться от ряда концепций, к которым ты привык.`
        } else {
            $ProResultTitle.textContent = 'Ты несчастен.'
            $ProResultText.textContent = `Не волнуйся – это поправимо. Ты просто не знаешь инструментов, которые могут тебе помочь.`
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
            const $ProTestDiv = document.createElement('div');
            $ProTestDiv.classList = 'proTestDiv'
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
            $ProTestDiv.append($ProTestYes, $ProTestNo, $ProTestCount)
            mainTest.append($ProTestQuation, $ProTestDiv)
        })

        mainTest.append($ProTestTitle, $ProTestText, $ProTestStart)
    }


    function resultToCall(reiting) {
        console.log(reiting)
        if(reiting > 4.5) {
            $resultTitle.textContent = 'Поздравляю! Ты живешь счастливой жизнью!'
            $resultText.textContent = `Зарази своим состоянием как можно больше людей!`
        } else if (reiting <= 4.5 && reiting >= 4) {
            $resultTitle.textContent = 'Ты почти счастливый человек.'
            $resultText.textContent = `Но это "почти" может не изменится никогда, если ты не научишься работать со своим умом и управлять им. Путь к счастью займет немного времени, если ты захочешь.`
        } else if (reiting < 4 && reiting >= 3) {
            $resultTitle.textContent = 'Ты по большей части несчастен.'
            $resultText.textContent = `Тебя редко что-то радует. Если захочешь, счастья может быть больше, но придется отказаться от ряда концепций, к которым ты привык.`
        } else {
            $resultTitle.textContent = 'Ты несчастен.'
            $resultText.textContent = `Не волнуйся – это поправимо. Ты просто не знаешь инструментов, которые могут тебе помочь.`
        }
        console.log(reiting, $resultText, $resultTitle)
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