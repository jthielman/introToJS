
const bouncer = (age) => {
    if (age >= 21) {
        console.log('DRINK (at the bar)');
    } else {
        console.log('SHAME');
    }
}

bouncer(12);
bouncer(93);

const me = 'martin';
console.log(me.length);



const myPerson = {
    name: 'john',
    age: '41'
}

console.log(myPerson['name']);
console.log(myPerson.name);

console.dir(myPerson);

// Challenge

let findAndLogEmployeeStatus = (employee) => {
    if (employee.name.charAt(0).toLowerCase() === 'c') {
        employee.status = 'vip';
    } else {
        employee.status = 'peasant';
    }
    console.log(`${employee.name} is a total ${employee.status}`);
    return employee;
}

const person = {
    name: 'Michael',
    status: ''
}
findAndLogEmployeeStatus(person);
findAndLogEmployeeStatus({
    name: 'lester',
    status: ''
});
findAndLogEmployeeStatus({
    name: 'carl clark',
    status: ''
});
// findAndLogEmployeeStatus({
//     name: prompt('What\'s the employee\'s name?'),
//     status: ''
// });
