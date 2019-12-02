import store from './store.js';

const toggleInput = (e, id, month, weekday, day) => {
    e.preventDefault()
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


export default toggleInput;