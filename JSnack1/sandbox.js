$(document).ready(function(){
    // JSnack 1
    // Creare un array di oggetti: ogni oggetto descriverà una bici
    // da corsa con le seguenti proprietà: nome e peso.
    // Stampare a schermo la bici con peso minore utilizzano destructuring e template literal.

    let bikes = [
        {
            name: 'Z102',
            weight: 30
        },
        {
            name: 'Hawk',
            weight: 25
        },
        {
            name: 'Hornett',
            weight: 36
        },
    ];

    let balance = bikes[0].weight;
    let position = 0;

    bikes.forEach((bike, index) => {

        let {weight} = bike;

        if (weight <= balance) {
            balance == weight;
            position == index;
            console.log(position);
        }
    });

    console.log(`
        La bici con il peso minore è la:
        ${bikes[position].name} con ${bikes[position].weight}kg
        `);

    // oppure
    // for (var i = 0; i < bikes.length; i++) {
    //
    //     let bike = bikes[i];
    //
    //     let {name, weight} = bike;
    //
    //     var balance = bikes[0].weight;
    //
    //     if (weight <= balance) {
    //         balance == weight;
    //         var index = i;
    //     }
    // }
    //
    // console.log(`La bici con il peso minore è la ${bikes[index]['name']} con ${bikes[index].weight}kg`);

});
