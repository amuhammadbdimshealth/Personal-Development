const findTheOldest = function (people) {
    return people.map(man => {
        if (!('yearOfDeath' in man)) {
            man['yearOfDeath'] = (new Date()).getFullYear();
        }
        return man;
    })
        .reduce((oldest, man) => {
            const ageOldest = oldest.yearOfDeath - oldest.yearOfBirth;
            const ageMan = man.yearOfDeath - man.yearOfBirth;
            if (ageMan > ageOldest) return man;
            else return oldest;
        });
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

const oldest = findTheOldest(people);
oldest;

// Do not edit below this line
module.exports = findTheOldest;
