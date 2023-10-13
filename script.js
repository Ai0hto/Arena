let tittleSpecialFirst = document.getElementById("tittle-special")
let tittleSpecialSecond = document.getElementById("tittle-special-second")
let tittleSpecialThird = document.getElementById("tittle-special-third")
let tittleSpecialFourth = document.getElementById("tittle-special-fourth")
let tittleSpecialFith = document.getElementById("tittle-special-fith")

let firstItemSpecial = document.getElementById('first-item-special__first-block')
let secondItemSpecial = document.getElementById('second-item-special__first-block')
let thirdItemSpecial = document.getElementById('third-item-special__first-block')
let fourthItemSpecial = document.getElementById('fourth-item-special__first-block')
let fithItemSpecial = document.getElementById('fith-item-special__first-block')

let sixItemSpecial = document.getElementById('six-item-special__second-block')
let sevenItemSpecial = document.getElementById('seven-item-special__second-block')
let eightItemSpecial = document.getElementById('eight-item-special__second-block')

let nineItemSpecial = document.getElementById("nine-item-special__third-block")
let tenItemSpecial = document.getElementById("ten-item-special__third-block")

let elevenItemSpecial = document.getElementById("eleven-item-special__fourth-block")
let twelveItemSpecial = document.getElementById("twelve-item-special__fourth-block")
let thirteenItemSpecial = document.getElementById("thirteen-item-special__fourth-block")
let fourteenItemSpecial = document.getElementById("fourteen-item-special__fourth-block")

let fifteenItemSpecial = document.getElementById("fiveteen-item-special__fith-block")
let sixteenItemSpecial = document.getElementById("sixteen-item-special__fith-block")
let seventeenItemSpecial = document.getElementById("seventeen-item-special__fith-block")

let checkbox = document.getElementById("switch__input")

let timesClicked = false

checkbox.addEventListener('click', function() {
    if(timesClicked)
    {
        tittleSpecialFirst.textContent = "За месяц"
        tittleSpecialSecond.textContent = "За месяц"
        tittleSpecialThird.textContent = "За месяц"
        tittleSpecialFourth.textContent = "За месяц"
        tittleSpecialFith.textContent = "За месяц"
        

        firstItemSpecial.textContent = "51 900 ₽"
        secondItemSpecial.textContent = "60 000 ₽"
        thirdItemSpecial.textContent = "73 500 ₽"
        fourthItemSpecial.textContent = "96 000 ₽"
        fithItemSpecial.textContent = "123 000 ₽"

        sixItemSpecial.textContent = "149 400 ₽"
        sevenItemSpecial.textContent = "172 200 ₽"
        eightItemSpecial.textContent = "176 700 ₽"
        
        nineItemSpecial.textContent = "148 500 ₽"
        tenItemSpecial.textContent = "195 000 ₽"

        elevenItemSpecial.textContent = "231 000 ₽"
        twelveItemSpecial.textContent = "289 500 ₽"
        thirteenItemSpecial.textContent = "254 500 ₽"
        fourteenItemSpecial.textContent = "564 000 ₽"

        fifteenItemSpecial.textContent = "381 000 ₽"
        sixteenItemSpecial.textContent = "567 000 ₽"
        seventeenItemSpecial.textContent = "810 000 ₽"

        timesClicked = false
    } else {

        tittleSpecialFirst.textContent = "За сутки",
        tittleSpecialSecond.textContent = "За сутки"
        tittleSpecialThird.textContent = "За сутки"
        tittleSpecialFourth.textContent = "За сутки"
        tittleSpecialFith.textContent = "За сутки"

        firstItemSpecial.textContent = "2 300 ₽"
        secondItemSpecial.textContent = "2 600 ₽"
        thirdItemSpecial.textContent = "3 200 ₽"
        fourthItemSpecial.textContent = "4 300 ₽"
        fithItemSpecial.textContent = "5 300 ₽"

        sixItemSpecial.textContent = "10 000 ₽"
        sevenItemSpecial.textContent = "10 000 ₽"
        eightItemSpecial.textContent = "10 000 ₽"

        nineItemSpecial.textContent = "10 000 ₽"
        tenItemSpecial.textContent = "10 000 ₽"

        elevenItemSpecial.textContent = "10 000 ₽"
        twelveItemSpecial.textContent = "12 600 ₽"
        thirteenItemSpecial.textContent = "15 850 ₽"
        fourteenItemSpecial.textContent = "24 500 ₽"

        fifteenItemSpecial.textContent = "16 520 ₽"
        sixteenItemSpecial.textContent = "24 500 ₽"
        seventeenItemSpecial.textContent = "35 000 ₽"
        
        timesClicked = true
    }
})