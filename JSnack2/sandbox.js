$(document).ready(function(){
    // JSnack 2
    // Creare un array di nomi e chiedere all’utente due numeri.
    // Creare un nuovo array con i valori che si trovano in una
    // posizione compresa tra i due numeri inseriti dall’utente.

    var names = ['Andrea', 'Marco', 'Luigi', 'Giulio', 'Paolo'];

    var numbers = [];
    while (numbers.length < 2){
        var number = parseInt(prompt('Insert a number'));

        if (isNaN(number)) {
            alert('Invalid input, the value is not a number, try again!');
        } else {
            if (number >= 0 && number < names.length) {
                numbers.push(number);
            } else {
                alert('Invalid input, the value has to be inclused between 0 and ' + names.length + ', try again!');
            }
        }
    }

    console.log(numbers);

    // aggiungo + 1 al secondo argomeno di slice perchè il metodo esclude l'estremo superiore
    var newNames = names.slice(numbers[0], (numbers[(1)] + 1));
    console.log(newNames);
});
