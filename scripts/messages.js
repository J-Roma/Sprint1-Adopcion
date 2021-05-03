
msgContainer = localStorage.getItem('msgContainer')
msgContainer = JSON.parse(msgContainer)
console.log(msgContainer);

document.addEventListener('DOMContentLoaded', () => {
    x = msgContainer.length - 1
    console.log(x);
    document.querySelector('#text').innerHTML = `
    <strong>Maria Dolores</strong> <br> ${msgContainer[x].msg}
    `
})