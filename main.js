const billAmount = document.querySelector('.billAmount');
const tipsContainer = document.querySelectorAll('.tips button');
const customPercent = document.querySelector('.tipCustom');
const peopleNumber = document.querySelector('.numberOfPeople');
const tipAmountResult = document.querySelector('.tipAmountResult');
const totalResult = document.querySelector('.totalResult');
const resetButton = document.querySelector('.resetButton');
let tipPercent = 0;

peopleNumber.addEventListener('input', peopleNumberFilter);

function peopleNumberFilter() {
    this.value = parseInt(this.value) || 0;
    calcularTipYTotal();
}
customPercent.addEventListener('input', calcularTipYTotal);
customPercent.addEventListener('input', customPercentage);
billAmount.addEventListener('input', calcularTipYTotal);
function customPercentage() {
    tipsContainer.forEach((element) => {
        element.classList.remove('selected');
    })
    tipPercent = customPercent.value;
}
function limpiarTip(button) {
    tipsContainer.forEach((element) => {
        element.classList.remove('selected');
    })
    button.classList.add('selected')
    customPercent.value = '';
}
tipsContainer.forEach((button) => {
    button.addEventListener('click', (event) => {
        let buttonClicked = event.target.classList[0];
        let button = event.target;
        switch (buttonClicked) {
            case 'fivePercent':
                limpiarTip(button);
                tipPercent = 5;
                calcularTipYTotal();
            break;
            case 'tenPercent':
                limpiarTip(button);
                tipPercent = 10;
                calcularTipYTotal();
            break;
            case 'fifteenPercent':
                limpiarTip(button);
                tipPercent = 15;
                calcularTipYTotal();
            break;
            case 'twentyfivePercent':
                limpiarTip(button);
                tipPercent = 25;
                calcularTipYTotal();
            break;
            case 'fiftyPercent':
                limpiarTip(button);
                tipPercent = 50;
                calcularTipYTotal();
            break;
        }
    })
})
function calcularTipYTotal() {
    if (peopleNumber.value == '' || peopleNumber.value == 0 || peopleNumber.value < 1) {
        alert('Corrije el número de personas')
    } else {
        let tipPerson = (billAmount.value * (tipPercent / 100)) / peopleNumber.value;
        tipAmountResult.innerHTML = `$${tipPerson}`;
        totalResult.innerHTML = `$${((billAmount.value / peopleNumber.value) + tipPerson)}`
    }
    
}