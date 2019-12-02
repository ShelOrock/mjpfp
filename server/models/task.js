const Sequelize = require('sequelize');
const { db } = require('../db.js');
const { STRING } = Sequelize;

const Task = db.define('task', {
    name: {
        type: STRING,
        allowNull: false
    },

    description: {
        type: STRING,
        allowNull: true
    }
});

module.exports = { Task };