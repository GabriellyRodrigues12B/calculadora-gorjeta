let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeopleValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber
    calculate()
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber
    console.log(numberOfPeople)
    calculate()
}

function receiveTipPercentageValeu(value) {
    tipPercentage = value / 100

    removeClassButtonSelected()

    document.querySelector("#custom-tip").value = ""

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")

    calculate()
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100

    removeClassButtonSelected()

    calculate()
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }
    buttonSelected = null
}

function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        let TipAmountStrong = document.querySelector(".amount strong")
        let TipAmountPerson = (bill * tipPercentage) / numberOfPeople
        TipAmountStrong.innerText = `$${TipAmountPerson.toFixed(2)}`

        let TotalAmountStrong = document.querySelector(".total strong")
        let TotalAmountPerson = (bill * (1 + tipPercentage)) / numberOfPeople
        TotalAmountStrong.innerText = `$${TotalAmountPerson.toFixed(2)}`
    }
}

function reset() {
    bill = 0
    tipPercentage = 0
    numberOfPeople = 0

    billInput.value = ""
    numberOfPeopleInput.value = ""
    document.querySelector("#custom-tip").value = ""

    removeClassButtonSelected()

    document.querySelector(".amount strong").innerText = "$0.00"
    document.querySelector(".total strong").innerText = "$0.00"
}
