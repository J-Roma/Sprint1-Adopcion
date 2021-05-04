
document.querySelector('#pills-home-tab').addEventListener('click', () => {
    document.querySelector('#toggle').classList.contains('opaq') ? (
        document.querySelector('#toggle').classList.toggle('opaq'),
        document.querySelector('#toggle2').classList.toggle('opaq')
    ): console.log('23') ;
})

document.querySelector('#pills-profile-tab').addEventListener('click', () => {
    document.querySelector('#toggle2').classList.contains('opaq') ? (
        document.querySelector('#toggle').classList.toggle('opaq'),
        document.querySelector('#toggle2').classList.toggle('opaq')
    ): console.log('23') ;
})

