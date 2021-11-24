//income inputs
const incomeSalary = document.getElementById('income-salary'),
    incomeFreelance = document.getElementById('income-freelance'),
    incomeExtra1 = document.getElementById('income-extra-1'),
    incomeExtra2 = document.getElementById('income-extra-2');
//costs inputs
const costsFlat = document.getElementById('costs-flat'),
    costsHouseServices = document.getElementById('costs-house-services'),
    costsTransport = document.getElementById('costs-transport'),
    costsCredit = document.getElementById('costs-credit');

//total inputs
const totalMonthInput = document.getElementById('total-month'),
    totalDayInput = document.getElementById('total-day'),
    totalYearInput = document.getElementById('total-year');
let totalMonth, totalDay, totalYear;

//money box
const moneyBoxRange = document.getElementById('money-box-range'),
    accumulationInput = document.getElementById('accumulation'),
    spend = document.getElementById('spend');
let accumulation = 0;
let totalPresents = 0;

const inputs = document.querySelectorAll('.input');
for (input of inputs){
    input.addEventListener('input', () => {
        countingAvailableMoney();
        calculationPresents();
    })
}
const strToIn= str=> str.value ? parseInt(str.value):0

const countingAvailableMoney = () => {
    const totalPerMonth = strToIn(incomeSalary) + strToIn(incomeFreelance) + strToIn(incomeExtra1) + strToIn(incomeExtra2);
    const totalCosts = strToIn(costsFlat) + strToIn(costsHouseServices) + strToIn(costsTransport) + strToIn(costsCredit);
    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;
}



moneyBoxRange.addEventListener('input', e => {
    const totalPrecentEl = document.getElementById('total-precents')
    totalPresents = e.target.value;
    totalPrecentEl.innerHTML = totalPresents;
    calculationPresents();
})


const calculationPresents = () => {
    accumulation = ((totalMonth * totalPresents) / 100).toFixed();
    accumulationInput.value = accumulation;

    spend.value = totalMonth - accumulation;
    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;


    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;
}
