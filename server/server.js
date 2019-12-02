const express = require('express');
const path = require('path');
const { getDaysInMonth, getDay } = require('./util.js');
const { Task, CalendarDate } = require('./index.js')

const app = express();

const PORT = 3000;

app.use(express.json())

app.use(express.static(path.join(__dirname, '../static')))
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/calendar/:page', (req, res, next) => {
    let { page } = req.params;
    if(page === undefined) {
        page = 0;
    } else {
        getDaysInMonth(2020, page)
        .then(days => res.send(days))
        .catch(e => console.log('ERROR FINDING PAGE', e));
    }
})

app.get('/api/calendar/:page/:day', (req, res, next) => {
    const { page } = req.params;
    const { day } = req.params;
    getDay(page, day)
        .then(_day => res.send(_day))
        .catch(e => console.log('ERROR FINDING DAY', e))
})

app.get('/api/tasks', (req, res, next) => {
    Task.findAll({
        include: CalendarDate
    })
        .then(tasks => res.send(tasks))
        .catch(e => console.log('ERROR FINDING TASKS', e))
})

app.post('/api/tasks', (req, res, next) => {
    const { dateId, inputName, inputDescription } = req.body;
        Task.create({
            name: inputName,
            description: inputDescription,
            calendarDateId: dateId
        })   
        .then(data => res.send(data))
        .catch(e => console.log('ERROR CREATING', e))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})