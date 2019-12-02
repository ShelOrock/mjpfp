import axios, { get, post, put } from 'axios';
import store from './store.js'

const getCalendar = page => {
    get(`/api/calendar/${page}`)
    .then(res => {
        store.dispatch({
            type: 'GET_CALENDAR',
            data: {
                monthNum: page,
                days: res.data.rows
            }
        })
    })
    .catch(e => console.log('ERROR', e))
}

const createTask = (e) => {
    const { inputDate, inputName, inputDescription } = store.getState()
    const { id } = inputDate
    e.preventDefault();
    post(`/api/tasks`, {
        dateId: id,
        inputName: inputName,
        inputDescription: inputDescription 
    })
    .then(res => {
            store.dispatch({
                type: 'POST_TASK',
                data: res.data,
        })
    })
    .catch(e => console.log('ERROR POSTING DATA', e))
}

const removeTask = (e) => {
    const { calendarView } = store.getState()
    console.log(calendarView)
    console.log(e.target)
    e.preventDefault();
}

export {
    getCalendar,
    createTask,
    removeTask
};
