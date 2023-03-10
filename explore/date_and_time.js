// Enable Quokkka to see the output 

// Create dates
let now = new Date()
now

let Jan01_1979 = new Date(0)
Jan01_1979

const hour24 = 24 * 60 * 60 * 1000

let Jan02_1970 = new Date(hour24)
Jan02_1970

Jan02_1970 = Jan02_1970.toISOString()
Jan02_1970

let Dec31_1969 = new Date(-24 * 60 * 60 * 1000);

Dec31_1969

let date = new Date("2017-01-26");
date


// local vs UTC
date = new Date(2011, 0, 1, 0, 0, 0, 0)
date

// offset
offsetMinutes = date.getTimezoneOffset()
offsetMinutes
offsetHours = offset / 60
offsetHours

// the local time 01-Jan-2011 12.00 AM is same as the ...
let localYear = date.getFullYear()
localYear
let localMonth = date.getMonth()
localMonth
let localDate = date.getDate()
localDate
let localHour = date.getHours()
localHour

// ... previous day in UTC 31-Dec-2011 06.00 PM
let utcYear = date.getUTCFullYear()
utcYear
let utcMonth = date.getUTCMonth()
utcMonth
let utcDate = date.getUTCDate()
utcDate
let utcHour = date.getUTCHours()
utcHour

// Set date components
let dEvent = new Date('August 19, 1975 23:15:30');
dEvent.setHours(24)
dEvent
dEvent.setHours(0)
dEvent

// Auto-correction
date = new Date(2016, 1, 28)
date

//..Add 2 days to the date
let currentDate = date.getDate()
date.setDate(currentDate + 2)
date

//..Get date 70 sec after now
date = new Date()
date
date.setSeconds(date.getSeconds() + 70)
date

let numDate = (+date)
numDate

// Date to number, date diff
let start = new Date(2022, 0, 1, 5)
start
let end = new Date(2022, 2, 2, 18)
end
let diff = end - start
//..in millisec
diff
//..convert to days
days = diff / (1000 * 60 * 60 * 24)
days

//.. format date difference in the format Day:Hour:Min
function formatDateDiff(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    diffInMs
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    diffInDays
    let remainingMilliseconds = (diffInMs % (1000 * 60 * 60 * 24))
    remainingMilliseconds
    const diffInHours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
    diffInHours
    const diffInMin = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    diffInMin
    return `${diffInDays}:${diffInHours}:${diffInMin}`;
}

const date11 = new Date('2021-01-01T12:00:00Z');
const date22 = new Date('2021-01-03T18:30:00Z');

console.log(formatDateDiff(date11, date22)); // Output: 2:6:30


// Benchmarking
function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

console.log('Time of diffSubtract: ' + bench(diffSubtract) + 'ms');
console.log('Time of diffGetTime: ' + bench(diffGetTime) + 'ms');



let time1 = 0;
let time2 = 0;

// run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}

console.log('Total time for diffSubtract: ' + time1);
console.log('Total time for diffGetTime: ' + time2);

// Date.parse from a string
let ms = Date.parse('2012-01-26T13:51:50.417+00:00');
ms
date = new Date(ms)
date


// Tasks
//..1 (Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.)
let date0 = new Date('Feb 20,2012 03:12')
date0
date0 = new Date(2012, 1, 20, 3, 12)
date0
date0 = new Date('2012-02-20T03:12')
date0

//..2 (Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.)
let date1 = new Date(2012, 0, 3)
let weekDay = date1.getDay()
weekDay
const options = { weekday: 'long' }
let dayName = date1.toLocaleString('en-US', options)
dayName
dayName = dayName.toUpperCase()
dayName
str = dayName.substring(0, 2)
str

//..3 (Which day of month was many days ago? Create a function getDateAgo(date, days) to return the day of month days ago from the date)
let date3 = new Date(2015, 0, 2);
let getDateAgo = (date, days) => {
    let newDate = new Date(date)
    let inputDays = date.getDate()

    newDate.setDate(inputDays - days)
    return newDate.getDate()
}

console.log(getDateAgo(date3, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date3, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date3, 365)); // 2, (2 Jan 2014)


//..4 (Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.)
let getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month);
    date
    date.setMonth(month + 1)
    date
    date.setDate(date.getDate() - 1)
    date
    return date.getDate()

    // Shortcut: let date = new Date(year, month + 1, 0); return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

//..5 (Write a function getSecondsToday() that returns the number of seconds from the beginning of today.)
const getSecondsToday = () => {
    const now = new Date();
    now
    const start = new Date(new Date().setHours(0, 0, 0))
    start
    let diffSec = Math.round(Math.abs(now - start) / 1000)
    return diffSec
}
const secPassed = getSecondsToday()
secPassed

//..6 (Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.)
const getSecondsToTomorrow = () => {
    return (24 * 60 * 60) - getSecondsToday()
}

let secTillTomorrow = getSecondsToTomorrow()
secTillTomorrow

//..6 another way
function getSecondsToTomorrow2() {
    let now = new Date();

    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let diff = tomorrow - now; // difference in ms
    return Math.round(diff / 1000); // convert to seconds
}

secTillTomorrow = getSecondsToTomorrow2()
secTillTomorrow
