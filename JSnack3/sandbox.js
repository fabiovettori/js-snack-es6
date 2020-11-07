$(document).ready(function(){
    // JSnack 3
    // A partire da un array di oggetti, creare una copia dell’array e
    // aggiungere ai singoli elementi dell’array una nuova
    // proprietà “position” che contiene una lettera casuale.

    var students = [
        {
            name: 'Andrea',
            surname: 'Gigli',
            age: 22
        },
        {
            name: 'Andrea',
            surname: 'Gigli',
            age: 22
        },
        {
            name: 'Andrea',
            surname: 'Gigli',
            age: 22
        }
    ];

    // console.log(students);

    for (var i = 0; i < students.length; i++) {
        var item = students[i];

        // genero un numero random compreso tra 97 (lettera a) e 122 (lettera z)
        var randomNumber = getRndInteger(97, 122);
        // console.log(randomNumber);

        var randomLetter = String.fromCharCode(randomNumber);
        // console.log(randomLetter);

        item['position'] = randomLetter;
    }

    console.log(students);

    // funzione che genera un numero random da un min ad un max
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

});
