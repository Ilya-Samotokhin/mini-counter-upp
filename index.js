const btnPlus = document.getElementById('btnPlus')
const counterText = document.getElementById('counterValue')
const btnClear = document.getElementById('btnClear')

const COUNTER_INITIAL_VALUE = 0

let counter = COUNTER_INITIAL_VALUE
btnPlus.addEventListener('click', function () {
	counter = counter + 1
	counterText.innerText = counter
	btnClearVisibility()
})

btnClear.addEventListener('click', function () {
	counter = COUNTER_INITIAL_VALUE
	counterText.innerText = counter
})

console.log(counterText)
