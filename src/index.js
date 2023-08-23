import './style.css'
import main from "./main"
import menu from "./menu"
import contact from "./contact"

//create container for buttons
const buttonsContainer = document.createElement('div')
buttonsContainer.classList.add('buttonsContainer')
const homeButton = document.createElement('button')
const menuButton = document.createElement('button')
const contactButton = document.createElement('button')
homeButton.textContent = 'HOME'
menuButton.textContent = 'MENU'
contactButton.textContent = 'CONTACT'
buttonsContainer.append(homeButton, menuButton, contactButton)
document.body.insertAdjacentElement('afterbegin', buttonsContainer)

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
document.body.appendChild(wrapper)

const footer = document.createElement('div')
footer.classList.add('footer')
footer.innerHTML = 'All rights reserved®'
wrapper.insertAdjacentElement('afterend', footer)

main () //when the site just loads

// invoke functions for each page when corresponding button is pressed

contactButton.addEventListener('click', function () {
    contact()  
})

menuButton.addEventListener('click', function () {
    menu()
})

homeButton.addEventListener('click', function () {
    main()
})

