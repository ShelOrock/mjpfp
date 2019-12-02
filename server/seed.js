const { CalendarDate } = require('./models/calendarDate.js');
const { db } = require('./db.js');
const { months, days } = require('./util.js');

const createDate = (year, day) => {
    const _date = new Date(year, null, day);
    return {
        year: _date.getFullYear(),
        month: months[_date.getMonth()],
        weekday: days[_date.getDay()],
        day: _date.getDate()
    }
}

const seed = async (year, dayCount) => {
    const calendar = await new Array(dayCount).fill('').map((day, idx) => {
        CalendarDate.create(createDate(year, idx + 1));
    })
}

const seedAndSync = async () => {
    db.sync({ force: true })
    .then(() => seed(2020, 365))
    .catch(e => console.log('error', e))
}

seedAndSync();