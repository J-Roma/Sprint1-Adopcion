
let favAmount = localStorage.getItem('favAmount')
favAmount = JSON.parse(favAmount)

let state = 0
let i = 0
favAmount.forEach( () => {
    state === 0 ? (
        document.querySelector('#fav-container').innerHTML += `
        <img class="img-fluid" src="${favAmount[i]}">
        `,
        state++,
        i++
    ): state === 1 ? (
        document.querySelector('#fav-container').innerHTML += `
        <img class="img-fluid mt-4" src="${favAmount[i]}">
        `,
        state--,
        i++
    ): console.log('Algo Esta Mal');
})

