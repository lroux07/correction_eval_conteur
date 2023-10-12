let moins = document.querySelector("#moins");
let plus = document.querySelector("#plus");
let reset = document.querySelector("#reset");
let numberClick = document.querySelector("#compteur")
let compteur = 0;


// Balise p -> compteur

document.querySelector('p').textContent = compteur;


// Moins

moins.addEventListener("click", ()=> {
    compteur--
    document.querySelector("#compteur").textContent = compteur

    if(compteur === 0) {
        numberClick.style.color="red"
    } else {
        numberClick.style.color="black"
    }

    if(compteur <= -10) {
        moins.disabled = true
    } else if(compteur < 20) {
        plus.disabled = false
    }

    if(compteur % 2 == 0) {
        numberClick.style.fontWeight = "bold"
        numberClick.style.backgroundColor = ""
    } else {
        numberClick.style.fontWeight = "normal"
        numberClick.style.backgroundColor = "green"
    }
})


// Plus

plus.addEventListener("click", ()=> {
    compteur++
    document.querySelector("#compteur").textContent = compteur

    if(compteur >= 20) {
        plus.disabled = true
    } else if(compteur > -10) {
        moins.disabled = false
    }

    if(compteur === 0) {
        numberClick.style.color="red"
    } else {
        numberClick.style.color="black"
    }

    if(compteur % 2 == 0) {
        numberClick.style.fontWeight = "bold"
        numberClick.style.backgroundColor = ""
    } else {
        numberClick.style.fontWeight = "normal"
        numberClick.style.backgroundColor = "green"
    }
})


// Reset

reset.addEventListener("click", ()=> {
    compteur = 0
    numberClick.textContent = 0
    numberClick.style.color = "red"

    if(reset = true) {
        plus.disabled = false
        moins.disabled = false
    }
})


compteur.addEventListener("change", ()=> {
    if(compteur > 0) {
        compteur.style.color="white"
    }
    
    if(compteur === 0) {
        compteur.style.color="red"
    } else {
        numberClick.style.color="black"
    }
})