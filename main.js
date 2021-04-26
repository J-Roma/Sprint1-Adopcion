import {dog1, cat1} from './scripts/data.js'

var param = window.location.search;
var urlParams = new URLSearchParams(param);
var valueParam = urlParams.get('id');

if( valueParam === "cat1"){
    document.querySelector('#pic').src = cat1.pic
    document.querySelector('#n-sex').innerHTML = `${cat1.nombre} <img src="images/${cat1.sexo}.png">`
    document.querySelector('#raza').innerHTML = `<img src="images/raza.png"> ${cat1.raza}`
    document.querySelector('#edad').innerHTML = `<img src="/images/edadprro.png"> ${cat1.edad}`
    document.querySelector('#perso1').src = `/images/${cat1.personalidad[0]}.png`
    document.querySelector('#perso2').src = `/images/${cat1.personalidad[1]}.png`
    document.querySelector('#perso3').src = `/images/${cat1.personalidad[2]}.png`
    document.querySelector('#historia').innerHTML = `${cat1.historia}`
}
if( valueParam === "dog1"){
    document.querySelector('#pic').src = dog1.pic
    document.querySelector('#n-sex').innerHTML = `${dog1.nombre} <img src="images/${dog1.sexo}.png">`
    document.querySelector('#raza').innerHTML = `<img src="images/raza.png"> ${cat1.raza}`
    document.querySelector('#edad').innerHTML = `<img src="/images/edadprro.png"> ${dog1.edad}`
    document.querySelector('#perso1').src = `/images/${dog1.personalidad[0]}.png`
    document.querySelector('#perso2').src = `/images/${dog1.personalidad[1]}.png`
    document.querySelector('#perso3').src = `/images/${dog1.personalidad[2]}.png`
    document.querySelector('#historia').innerHTML = `${dog1.historia}`
}
