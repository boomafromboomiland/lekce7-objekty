let krava = {
    jmeno: 'Kravička',
    foto: 'obrazky/krava.jpg'
};

let ovecka = {
    jmeno: 'Ovečka',
    foto: 'obrazky/ovce.jpg'
};

// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

let zviera = document.createElement('div');
zviera.className = 'zviera';


// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.


    // let fotoZvierata

let fotoZvierata = document.createElement('img');
fotoZvierata.className = 'foto';
fotoZvierata.src = krava.foto;

    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

    //let jmenoZvirete =

let menoZvierata = document.createElement('span');
menoZvierata.className = 'meno';
menoZvierata.innerHTML = krava.jmeno;

    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)

zviera.appendChild(fotoZvierata);
zviera.appendChild(menoZvierata);


// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

  //let farma =

let farma = document.querySelector('.farma');
farma.appendChild(zviera);



// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?