const Sequelize = require('sequelize');
const { db } = require('../db.js');
const { INTEGER, STRING } = Sequelize;

const CalendarDate = db.define('calendarDate', {
    year: {
        type: INTEGER,
        allowNull: false,
    },

    month: {
        type: STRING,
        allowNull: false,
    },

    weekday: {
        type: STRING,
        allowNull: false,
    },

    day: {
        type: INTEGER,
        allowNull: false,
    }
})

module.exports = { CalendarDate };