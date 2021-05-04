
document.addEventListener('DOMContentLoaded', () => {
  let URL = window.location.pathname
  localStorage.setItem('URL', URL)

  function myFunction(x) {
    if (x.matches) { // If media query matches
      document.querySelector('#pop').classList.replace('fixed-bottom', 'fixed-top')
      document.querySelector('body').style.paddingTop = '70px'
    } else {
      console.log('no');
    }
  }
  var x = window.matchMedia("(min-width: 700px)")
  myFunction(x) // Call listener function at run time
})

