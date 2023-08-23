export default function menu () {
    //at first check whether we on the page contact already or not. If we do then function stops
    const oldH2 = document.getElementsByTagName('h2')
    if (oldH2[0].textContent === 'MENU') return
    const oldContent = document.getElementById('content')
    oldContent.remove()
    const newContent = document.createElement('div')
    newContent.setAttribute('id', 'content')
    document.body.append(newContent)
    const headline = document.createElement('h2')
    headline.innerHTML = 'MENU'
    const bodyOfMenu = document.createElement('p')
    bodyOfMenu.innerHTML = `
    <h2>AUGUST 24, 2023</h2>
    Reservations available via Resy, and we always welcome walk-ins.<br><br>
    
    <b>FIRST</b><br>
    OLIVES<br>
    $9<br><br>
    
    ANTIPASTI PLATE<br>
    $23<br><br>
    
    FAVA BEAN PUREE<br>
    $18<br><br>
    
    EEL LAKE OYSTERS<br>
    $24<br><br>
    
    ARUGULA, PARMIGIANO, PINE NUTS AND MEYER LEMON VINAIGRETTE<br>
    $23<br><br>
    
    STRACCIATELLA, SNAP PEAS AND PISTACHIOS<br>
    $21<br><br><br>
    
    <b>SECOND</b><br>
    BUCATINI, ZUCCHINI, BASIL AND PARMIGIANO<br>
    $27<br><br>
    
    CALAMARETTI, SWORDFISH PUTTANESCA<br>
    $28<br><br>
    
    MACCHERONI, GUANCIALE AND FAVA BEANS<br>
    $28<br><br><br>
    
    <b>THIRD</b><br>
    SCALLOPS, POTATOES, MUSHROOMS AND LOVAGE<br>
    $41<br><br>
    
    CHICKEN DIAVOLO WITH BROCCOLINI<br>
    $46<br><br>
    
    BAVETTE STEAK, POLENTA, RADICCHIO AND OLIVES<br>
    $39<br><br><br>
    
    <b>DESSERT</b><br>
    STUBBORN CHEESE, HONEY AND ALMONDS<br>
    $14<br><br>
    
    OLIVE OIL CAKE WITH BLUEBERRY COMPOTE<br>
    $15<br><br>
    
    PANNA COTTA WITH RHUBARB PRESERVES<br>
    $12<br><br>
    
    MINT STRACCIATELLA ICE CREAM<br>
    $9<br><br>
    
    CHOCOLATE SORBETTO<br>
    $9<br><br>
    
    AFFOGATO<br>
    $12<br><br>`
    newContent.append(headline, bodyOfMenu)
    const wrapper = document.querySelector('.wrapper')
    wrapper.appendChild(newContent)
    //change color of the active tab
    const tab = document.querySelectorAll('button')
    tab[1].style.backgroundColor = 'blue'
    tab[1].style.color = 'yellow'
    tab[0].style.backgroundColor = 'yellow'
    tab[0].style.color = 'blue'
    tab[2].style.backgroundColor ='yellow'
    tab[2].style.color = 'blue'
}