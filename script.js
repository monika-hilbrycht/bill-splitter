const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.cost');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const showBill = () => {
    
    if (price.value == '' || people.value == '' || tip.value == 0) {
        error.textContent = 'Complete all fields!';
    } else {
        countBill();
    } 
};

const countBill = () => {
    const newPrice = price.value;
    const newPeople = people.value;
    const newTip = tip.value;

    const sum = (newPrice + newPrice * newTip) / newPeople;
}

countBtn.addEventListener('click', showBill)