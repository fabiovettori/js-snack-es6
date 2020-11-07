$(document).ready(function(){

    // milestone 1:
    // definire un array di oggetti; ogni oggetto
    // rappresenta un gatto, che è caratterizzato da:
    // nome, età, colore e sesso.
    // Tramite la funzione forEach, stampare in pagina
    // tutti i gattini, ciascuno con il proprio colore e il proprio nome.

    let cats = [
        {
            name: 'Pippo',
            age: 3,
            color: 'red',
            gender: 'male'
        },
        {
            name: 'Pluto',
            age: 5,
            color: 'black',
            gender: 'male'
        },
        {
            name: 'Minnie',
            age: 2,
            color: 'violet',
            gender: 'female'
        },
        {
            name: 'Jasmin',
            age: 1,
            color: 'purple',
            gender: 'female'
        },
        {
            name: 'Sandy',
            age: 6,
            color: 'lightsalmon',
            gender: 'female'
        },
        {
            name: 'Ketty',
            age: 3,
            color: 'brown',
            gender: 'female'
        },
        {
            name: 'Ken',
            age: 4,
            color: 'aqua',
            gender: 'male'
        },
        {
            name: 'Jerry',
            age: 4,
            color: 'green',
            gender: 'male'
        },
    ];

    cats.forEach( (cat) => {

        const {color,  name} = cat;

        $('.cats').append(
            `<div class="cat">
                <span class="fas fa-cat" style="color:${color}"></span>
                <span>${name}</span>
            </div>`);
    });

    // milestone 2:
    // dividere i gatti in due contenitori distinti in base
    // al sesso e aggiungere a fianco di ogni gattino un
    // fiocco colorato di rosa se femmina o di blu se
    // maschio.
    // Il colore del fiocco deve essere più tenue se il
    // gatto è più giovane, più scuro se il gatto è più
    // vecchio.

    cats.filter((cat) => {
        const {gender, color,  name, age} = cat;
        if (gender == 'female') {

            return $('.female').append(
                `<div>
                    <div class="cat">
                        <span class="fas fa-cat" style="color:${color}"></span>
                        <span>${name}</span>
                    </div>
                    <span class="fas fa-ribbon" style="color:pink; opacity:${age * 10}%"></span>
                </div>`);
        }
    });

    cats.filter((cat) => {
        const {gender, color,  name, age} = cat;
        if (gender == 'male') {

            return $('.male').append(
                `<div>
                    <div class="cat">
                        <span class="fas fa-cat" style="color:${color}"></span>
                        <span>${name}</span>
                    </div>
                    <span class="fas fa-ribbon" style="color:blue; opacity:${age *10}%"></span>
                </div>`);
        }
    });

    // milestone 3:
    // creare un nuovo array con prima tutti i gattini
    // femmina e poi tutti i gattini maschio, inserendo
    // solamente nome e colore e opacità del fiocco
    // per ogni gatto.

    let array = [];
    cats.forEach( (cat, i) => {

        const {name, color, age} = cat;
        array.push({name});
        array[i]['color'] = color;
        array[i]['opacity'] = `${age * 10}%`;
    });
    console.log(array);
});
