const fancyFunction = (something) => {
    return something + ' fancy';
}

let output = fancyFunction('michael is');
console.log(output);

let firstName = 'George';
let lastName = 'Weasley';

console.log(`${firstName} ${lastName}`);

firstName = 'Bill';

console.log(`${firstName} ${lastName}`);

firstName = 'Ginny';

console.log(`${firstName} ${lastName}`);

const sayMyName = (first, last) => {
    // do something
    return `${first} ${last}`;
}

console.log(sayMyName('Callan', 'Morrison'));


// NUGGET TIME

const nuggetizer = (animal) => {
    return `nugget ${animal}`;
}

const humaneNuggetizer = (animal) => {
    return animal;
}

const spamFactory = (literallyAnything) => {
    return 'spam (lunch)';
}

console.log(nuggetizer('chicken'));
console.log(nuggetizer('octopus'));
console.log(nuggetizer('john wark'));

console.log(humaneNuggetizer('chicken'));
console.log(humaneNuggetizer('octopus'));
console.log(humaneNuggetizer('john wark'));

console.log(spamFactory('chicken'));
console.log(spamFactory('octopus'));
console.log(spamFactory('john wark'));

let bandNumber = 1

const printToDOM = (toPrint) => {
    document.getElementById('output').innerHTML += toPrint;
}

const takeNumber = (bandName) => {
    printToDOM(`<h3>${bandNumber}. ${bandName} </h3>`);
    bandNumber ++;
}

takeNumber("Galactic Scum");
takeNumber("Underdogs");
takeNumber('The Beatles');


printToDOM('John');


