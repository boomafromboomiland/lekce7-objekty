// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
  znacka: 'ford',
  farba: 'modrá',
  rokVyroby: 2015,
  spz: '1B2 3456',
};

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)

auto.majitel = {};
auto.majitel.meno = 'Ľubka';
auto.majitel.priezvisko = 'Kováčová';

// Přepiš značku na Škoda
auto['znacka'] = 'Škoda';

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
let majitelka = auto.majitel.meno + '' + auto.majitel.priezvisko;
let znacka = auto.znacka; 
let spz = auto.spz;
