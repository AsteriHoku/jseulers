// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

const dict = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednsday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
};

const startDate = new Date('1901-01-01');
const endDate = new Date('2000-12-31');
let sundays = 0;

console.log(`${startDate} was a ${startDate.getDay()}`);

for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
    if (i.getDay() === 0 && i.getDate() === 1) {
        sundays++;
        console.log(`${dict[i.getDay()]} ${i.getDate()} ${i}`);
    }
}

console.log(`${startDate} was a ${dict[startDate.getDay()]}`);
console.log(sundays);