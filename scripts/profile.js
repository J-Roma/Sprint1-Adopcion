let btn = document.querySelector('#save')

let onload = () => {
    let profile = localStorage.getItem('profile')
    profile = JSON.parse(profile)
    document.querySelector('#act-nombre').innerHTML = `${profile.name} ${profile.apellido}`

} 

btn.addEventListener('click', () => {
    let user = {
        name: document.querySelector('#f-name').value,
        apellido: document.querySelector('#f-lastname').value,
        email: document.querySelector('#email').value,
    }
    if (user.name.length != 0 & user.apellido.length != 0 & user.email.length != 0){
        localStorage.setItem('profile', JSON.stringify(user))
        document.querySelector('#act-nombre').innerHTML = `${user.name} ${user.apellido}`
    }
})