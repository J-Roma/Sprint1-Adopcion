import { dog1, cat1} from './scripts/data.js'

var btn_fav = document.querySelector('#fav')
var param = window.location.search;
var urlParams = new URLSearchParams(param);
var valueParam = urlParams.get('id');
const saveLocalStorage = window.localStorage


document.addEventListener('DOMContentLoaded', () => {
    let URL = localStorage.getItem('URL')
    document.querySelector('#back-url').setAttribute('href', URL)
    saveLocalStorage.hasOwnProperty('favAmount') ? console.log('Existe') : localStorage.setItem('favAmount', JSON.stringify([]));
    if (valueParam === 'cat1') {
        saveLocalStorage.hasOwnProperty('favStateCat1') ? console.log(saveLocalStorage.favStateCat1) : localStorage.setItem('favStateCat1', 'disable');
        saveLocalStorage.favStateCat1 === 'disable' ? document.querySelector('#fav').src = '/images/fav.png' : document.querySelector('#fav').src = '/images/fav-select.png';
    }
    if (valueParam === 'dog1') {
        saveLocalStorage.hasOwnProperty('favStateDog1') ? console.log(saveLocalStorage.favStateDog1) : localStorage.setItem('favStateDog1', 'disable');
        saveLocalStorage.favStateDog1 === 'disable' ? document.querySelector('#fav').src = '/images/fav.png' : document.querySelector('#fav').src = '/images/fav-select.png';
    }
})

let favAmount = localStorage.getItem('favAmount')

favAmount = JSON.parse(favAmount)

btn_fav.addEventListener('click', () => {
   
    valueParam === 'cat1' ? (
        saveLocalStorage.favStateCat1 === 'disable' ? (
            document.querySelector('#fav').src = 'https://i.imgur.com/CyTgaSy.png',
            localStorage.setItem('favStateCat1', 'active'),
            favAmount.push(cat1.pic),
            localStorage.setItem('favAmount', JSON.stringify(favAmount))
        ): (
            document.querySelector('#fav').src = 'https://i.imgur.com/Xr6l0by.png',
            localStorage.setItem('favStateCat1', 'disable'),
            favAmount.pop(),
            localStorage.setItem('favAmount', JSON.stringify(favAmount))
        )
    ): valueParam === 'dog1' ? (
        saveLocalStorage.favStateDog1 === 'disable' ? (
            document.querySelector('#fav').src = 'https://i.imgur.com/CyTgaSy.png',
            localStorage.setItem('favStateDog1', 'active'),
            favAmount.push(dog1.pic),
            localStorage.setItem('favAmount', JSON.stringify(favAmount))
        ): (
            document.querySelector('#fav').src = 'https://i.imgur.com/Xr6l0by.png',
            localStorage.setItem('favStateDog1', 'disable'),
            favAmount.pop(),
            localStorage.setItem('favAmount', JSON.stringify(favAmount))
        )
    ): console.log('Error');

})

if (valueParam === "cat1") {
    document.querySelector('#pic').src = cat1.pic2
    document.querySelector('#n-sex').innerHTML = `${cat1.nombre} <img src="images/${cat1.sexo}.png">`
    document.querySelector('#raza').innerHTML = `<img src="images/raza.png"> ${cat1.raza}`
    document.querySelector('#edad').innerHTML = `<img src="/images/edadprro.png"> ${cat1.edad}`
    document.querySelector('#perso1').src = `${cat1.personalidad[0]}`
    document.querySelector('#perso2').src = `${cat1.personalidad[1]}`
    document.querySelector('#perso3').src = `${cat1.personalidad[2]}`
    document.querySelector('#historia').innerHTML = `${cat1.historia}`
}
if (valueParam === "dog1") {
    document.querySelector('#pic').src = dog1.pic2
    document.querySelector('#n-sex').innerHTML = `${dog1.nombre} <img src="images/${dog1.sexo}.png">`
    document.querySelector('#raza').innerHTML = `<img src="images/raza.png"> ${cat1.raza}`
    document.querySelector('#edad').innerHTML = `<img src="/images/edadprro.png"> ${dog1.edad}`
    document.querySelector('#perso1').src = `${dog1.personalidad[0]}`
    document.querySelector('#perso2').src = `${dog1.personalidad[1]}`
    document.querySelector('#perso3').src = `${dog1.personalidad[2]}`
    document.querySelector('#historia').innerHTML = `${dog1.historia}`
}

/* // Otra Forma de Verificar al cargar la Pagina, El inconveniente es que pausa la pagina brevemente
let verify = () => {

    saveLocalStorage.hasOwnProperty('favAmount') ? console.log('Existe') : localStorage.setItem('favAmount', JSON.stringify({}));

    if (valueParam === 'cat1') {
        saveLocalStorage.hasOwnProperty('favStateCat1') ? console.log(saveLocalStorage.favStateCat1) : localStorage.setItem('favStateCat1', 'disable');
        saveLocalStorage.favStateCat1 === 'disable' ? document.querySelector('#fav').src = '/images/fav.png' : document.querySelector('#fav').src = '/images/fav-select.png';
    }
    if (valueParam === 'dog1') {
        saveLocalStorage.hasOwnProperty('favStateDog1') ? console.log(saveLocalStorage.favStateDog1) : localStorage.setItem('favStateDog1', 'disable');
        saveLocalStorage.favStateDog1 === 'disable' ? document.querySelector('#fav').src = '/images/fav.png' : document.querySelector('#fav').src = '/images/fav-select.png';
    }
}
// Cargar Funcion Verify al Cargar la Pagina
window.onload = verify()*/