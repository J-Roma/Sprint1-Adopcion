//const socket = io()
let state = 0
let i = 0
const msgContainer = [
    { msg: '¡Hola! Me encantaria Adoptar a Rocky.S', hora: '4:00 PM' },
    { msg: 'Hola Buen Dia, en que horario podriamos encontrarnos?', hora: '6:00 PM' },
    { msg: 'El miercoles a las 3 podrias?', hora: '6:15 PM' },
    { msg: 'No puedo ese Dia, tengo una cita de trabajo en la tarde', hora: '6:20 PM' }
]

let message = document.querySelector('#form')
let content = document.querySelector('#message')
let output = document.querySelector('#chat')
var msgLocal = localStorage.getItem('msgContainer')
msgLocal = JSON.parse(msgLocal)


document.addEventListener('DOMContentLoaded', () => {
    window.localStorage.hasOwnProperty('msgContainer') ? console.log('Ok') : localStorage.setItem('msgContainer', JSON.stringify(msgContainer));
    msgLocal.forEach(() => {
        state === 0 ? (
            output.innerHTML += `
            <div id="me" class="me">
            <div class="message-me">
                <p>${msgLocal[i].msg}</p>
                <p class="text-end h6">${msgLocal[i].hora}</p>
            </div>
            </div>
            `,
            state++,
            i++
        ) : state === 1 ? (
            output.innerHTML += `
            <div id="you" class="you">
            <div class="message-you">
                <p>${msgLocal[i].msg}</p>
                <p class="text-end h6">${msgLocal[i].hora}</p>
            </div>
            </div>
            `,
            state--,
            i++
        ) : console.log('Algo Esta Mal');
    })

})

btn = message.addEventListener('submit', e => {

    /*Para probar el chat con websokect, Descomentar*/
    /*socket.emit('myMessage', {
        content: content.value
    })*/
    
    // Comentar para trabajar con websocket ---Inicio
    getTime()
    output.innerHTML += `
        <divid="me" class="me">
            <div class="message-me">
            <p>${data.content}</p>
            <p class="text-end h6">${showTime}</p>
            </div>
        </div>`
    let msgTemporal = {msg: data.content, hora: showTime}
    msgLocal.push(msgTemporal)
    localStorage.setItem('msgContainer', JSON.stringify(msgLocal))
    // Comentar para trabajar con websocket ---Fin


    content.value = ''

    e.preventDefault()
})

function getTime(){
    time = new Date()
    hour = time.getHours()
    minute = time.getMinutes()
    hour >= 12 ? (
        hour = hour - 12,
        showTime = hour + ":" + minute + " PM"
    )  : showTime = hour + ":" + minute + " AM" ;
    
}

// Descomentar para WebSocket
/*socket.on('myMessage', (data) => {
    getTime()
    output.innerHTML += `
        <divid="me" class="me">
            <div class="message-me">
            <p>${data.content}</p>
            <p class="text-end h6">${showTime}</p>
            </div>
        </div>`
    let msgTemporal = {msg: data.content, hora: showTime}
    msgLocal.push(msgTemporal)
    localStorage.setItem('msgContainer', JSON.stringify(msgLocal))
})*/






/*let mensaje = null
const arr = []
btn = document.querySelector('#form').addEventListener('submit', e => {
    mensaje = document.querySelector("#mensajes").value
    document.querySelector('#chat').innerHTML += `<div id="me" class="me"><div class="message-me"><p>${mensaje}</p></div></div>`
    //casa.push(mensaje)
    arr.push(mensaje)

    setTimeout(() => {
        mostrar()
    }, 1000);
    e.preventDefault()
})

console.log(arr)

let estado = 0
const casa = [
    {hora:"3fffffffffff4", mensaje:"No puedo ese dia, Podriamos encontrarnos mañana a las 2"},
       {hora:"34", mensaje:"DASf"},
       {hora:"fff", mensaje:"Yadie cal ldfkgflgklfkl "}
    ]

function mostrar() {
    casa.filter((item) => item = estado)
    let el = casa.filter((item) => item === casa[estado])
    if (estado < casa.length){
        document.querySelector('#chat').innerHTML += `<div id="you" class="you"><div class="message-you"><p>${casa[estado].mensaje}</p></div></div>`
        arr.push(casa)
        estado++;

    }
    console.log(arr)

}*/
