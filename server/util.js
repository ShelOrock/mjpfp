const Sequelize = require('sequelize');
const { CalendarDate } = require('./models/calendarDate.js');
const { Task } = require('./models/task.js')

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const getDaysInMonth = (year, n) => {
    if(n < 12) {
        return CalendarDate.findAndCountAll({
            include: Task,
            where: { year, month: months[n] },
            order: [['day', 'ASC']]
        })
    } else {
        return null
    }
}

const getDay = (idx, n) => {
    return CalendarDate.findOne({
        include: Task,
        where: { month: months[idx], day: n }
    })
}

module.exports = { 
    getDaysInMonth,
    getDay,
    months,
    days,
 };