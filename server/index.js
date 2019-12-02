const { CalendarDate } = require('./models/calendarDate.js');
const { Task } = require('./models/task.js');
const { db } = require('./db.js');
const seed = require('./seed.js');

CalendarDate.hasMany(Task);
Task.belongsTo(CalendarDate);

module.exports = {
    CalendarDate,
    Task,
    db,
    seed,
};