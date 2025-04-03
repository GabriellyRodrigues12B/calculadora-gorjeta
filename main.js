let bill = 0
let tipPercentage = 0
let numberOfPeople = 0

let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

let numberOfPeople = documen.querySelector("#people")
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


    function calculate(){
        if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !==0){
            console.log ("é possivel calcular")
        } else{
            console.log("Ainda não dá! Preencha tudo!")
        }
    }



