import Image1 from './image1.jpg'
import Image2 from './image2.jpg'
import Image3 from './image3.jpg'
import Image4 from './image4.jpg'
export default function main () {
    //at first check whether we on the main page already or not. If we do then function stops
    const oldH2 = document.getElementsByTagName('h2')
    if (document.getElementById('content').innerHTML) {
        if (oldH2[0].textContent === 'WELCOME TO OUR RESTAURANT, LADIES AND GENTELMEN') return
    }
    const content = document.getElementById('content')
    content.innerHTML = ''
    const headline = document.createElement('h2')
    headline.textContent = 'WELCOME TO OUR RESTAURANT, LADIES AND GENTELMEN'
    const firstImage = document.createElement('img')
    firstImage.src = Image1
    const secondImage = document.createElement('img')
    secondImage.src = Image2
    const thirdImage = document.createElement('img')
    thirdImage.src = Image3
    const fourthImage = document.createElement('img')
    fourthImage.src = Image4
    const description = document.createElement('p')
    description.innerHTML = 'Wikipedia says a restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.'
    content.append(headline, firstImage, secondImage, thirdImage, fourthImage, description)
    const wrapper = document.querySelector('.wrapper')
    wrapper.appendChild(content)
    
}