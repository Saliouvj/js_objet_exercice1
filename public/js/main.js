// EXO 1

console.log("____1____");

let personnageUn = {
    nom : "Lemaire",
    prenom : "saliou",
    age : 2é,
    taille : 175,
}

console.log(personnageUn);
console.log(personnageUn.age);

// EXO 2 - 3

console.log("____2-3____");

let personnageDeux = {
    nom : "Mousto",
    prenom : "Bilal",
    age : 25,
    taille : 194,
}

console.log(personnageDeux);

let personnageTrois = {}

personnageTrois.nom = personnageUn.nom
personnageTrois.age = personnageDeux.age
personnageTrois.taille = 183

console.log(personnageTrois);

// EXO 4

console.log("____4____");

let personnageQuatre = {
    saluer() {
        console.log(`Coucou ${personnageDeux.nom}`);
    }
}

personnageQuatre.saluer();

// EXO 5

console.log("____5____");

let personnageCinq = {
    nom : "Dutranoix",
    prenom : "Basile",
    sePresenter() {
        console.log(`Bonjour je m'appelle ${personnageCinq.nom} ${personnageCinq.prenom}`);
    }
}

personnageCinq.sePresenter();

// EXO 6

console.log("____6____");

let personnageSix = {
    nom : "Orban",
    changerAge() {
        this.age = prompt("Âge ?");
        console.log(`${this.nom} a ${this.age} ans.`);
    }
}

personnageSix.changerAge();

// EXO 7

console.log("____7____");

let personnageUno = {
    nom : "Boiro",
    age : 25,
}

let personnageDos = {
    nom : "kaba",
    age : 25,
}

let personnageTres = {
    nom : "Sirius",
    age : 25,
}

let voleur = {
    usurpation(x) {
        this.nom = x.nom
        this.age = x.age;
        console.log(`Bonjour je suis ${this.nom} et j'ai ${this.age} ans`);
    }
}

voleur.usurpation(personnageDos);
console.log(voleur);

// EXO 8 

console.log("____8____");

françois = {
    panier : ["cerise", "tomate"],
    derober() {
        françois.panier.push(sergio.panier[0], sergio.panier[1])
        sergio.panier.splice(0, sergio.panier.length)
    }
}

sergio = {
    panier : ["citron", "pain"],
}

françois.derober()
console.log(françois);
console.log(sergio);

// 
