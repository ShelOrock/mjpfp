import store from './store.js';

const toggleInput = (e, id, month, weekday, day) => {
    e.preventDefault();
    const { inputWindow } = store.getState();
    store.dispatch({
        type: 'SHOW_INPUT',
        data: {
            toggleInput: !inputWindow,
            inputDate: {
                month: month,
                weekday: weekday,
                day: day,
                id: id
            }
        }
    })
}

const toggleEdit = (e, id, month, weekday, day, taskId) => {
    e.preventDefault();
    const { editWindow } = store.getState();
    store.dispatch({
        type: 'SHOW_EDIT',
        data: {
            toggleEdit: !editWindow,
            taskToEdit: taskId
        }
    })
    console.log(store.getState())
}

export {
    toggleInput,
    toggleEdit
};