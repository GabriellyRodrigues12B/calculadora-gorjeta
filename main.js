let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

let numberOfPeopleInput = documen.querySelector("#people")
numberOfPeople.addEventListener("input", )

function receiveBillValue() {
 bill = billInput.valueAsNumber


    calculete()
   
}

    function receiveNumberOfPeopleValue(){
        numberOfPeople= numberOfPeopleInput.valueAsNumber

        console.log(numberOfPeople)

        calculete()
    }

    function receiveTipPercentageValeu(value){

        tipPercentage= value/100

        removeClassButtonSelected()

        document.querySelector("custom-tip").value = ""

        buttonSelected=document.querySelector(`#button-${value}`)
        buttonSelected.classList.add("button-selected")

        calculate()

    }



    function receiveCustomTipPercentageValue (){
        tipPercentage= document.querySelector("#custom-tip").valueAsNumber / 100

        removeClassButtonSelected()

        calculate()


    }


    function removeClassButtonSelected(){
        if (buttonSelected !==null)
            buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }



    function calculate(){
        if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !==0){
        let TipAmountStrong = document.querySelector(".amount strong")
        let TipAmountPerson = bill * tipPercentage / numberOfPeople
        TipAmountStrong.innerText =`$${TipAmountPerson.toFixed(2)}`


        let totalStrong = document.querySelector(".total strong")
        let totalPerson = (bill / numberOfPeople) + tipAmountPerson
        totalStrong.innerText = `$${totalPerson.toFixed(2)}`
    }
    }

