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
    const { inputDate, inputName, inputDescription } = store.getState();
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

const removeTask = (e, id) => {
    e.preventDefault();
    axios.delete(`api/tasks/${id}`)
    .then(() => {
        store.dispatch({
            type: 'DELETE_TASK',
            data: id
        })
    })
    .catch(e => console.log('EEROR DELETING DATA', e))
}

const editTask = (e, id) => {
    e.preventDefault();
    const { editName, editDescription } = store.getState();
    put(`api/tasks/${id}`, {
        editName: editName,
        editDescription: editDescription
    })
    .then(res => {
        store.dispatch({
            type: 'EDIT_TASK',
            data: res.data,
        })
    })
    .catch(e => console.log('ERROR EDITING TASK', e))
}

export {
    getCalendar,
    createTask,
    removeTask,
    editTask
};
