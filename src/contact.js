export default function contact () {
    //at first check whether we on the page contact already or not. If we do then function stops
    const oldH2 = document.getElementsByTagName('h2')
    if (oldH2[0].textContent === 'CONTACT US') return
    const oldContent = document.getElementById('content')
    oldContent.remove()
    const newContent = document.createElement('div')
    newContent.setAttribute('id', 'content')
    document.body.append(newContent)
    const headline = document.createElement('h2')
    headline.innerHTML = 'CONTACT US'
    const bodyOfContact = document.createElement('p')
    bodyOfContact.innerHTML = `
    <b>Chef: </b>Hannah Shizgal-Paris, tel. +9 094 217 94 01<br><br>
    <b>Sous Chef: </b>Jose Genao, tel. +9 094 217 94 02<br><br>
    <b>General Manager: </b>Brittany Tinelli, tel. +9 094 217 94 03<br><br>
    <b>Beverage Manager: </b> Milan Prince, tel. +9 094 217 94 04<br><br>
    <h2>HOURS</h2>
    <b>DINNER: </b>Monday - Sunday 5-10:30 pm<br><br>
    <b>LUNCH: </b>Saturday & Sunday 11 am-3 pm
    <h2>LOCATION</h2>
    243 Dekalb Ave, Brooklyn, NY 11205
    718.622.5300<br><br>
    hello@romansnyc.com`
    newContent.append(headline, bodyOfContact)
    const wrapper = document.querySelector('.wrapper')
    wrapper.appendChild(newContent)
      //change color of the active tab
      const tab = document.querySelectorAll('button')
      tab[2].style.backgroundColor = 'blue'
      tab[2].style.color = 'yellow'
      tab[0].style.backgroundColor = 'yellow'
      tab[0].style.color = 'blue'
      tab[1].style.backgroundColor ='yellow'
      tab[1].style.color = 'blue'
}