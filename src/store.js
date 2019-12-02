import { createStore } from 'redux';

const initialState = {
    currMonth: 4,
    calendarView: [],
    inputWindow: false,
    inputDate: {
        month: '',
        weekday: '',
        day: 0,
        id: 0,
    },
    inputName: '',
    inputDescription: '',
}

const reducer = (state = initialState, action) => {
    const { type, data } = action;
    switch(type) {
        case 'GET_CALENDAR':
            return {
                ...state,
                currMonth: data.monthNum,
                calendarView: [ ...data.days ]
            }
        case 'INPUT_NAME_CHANGE':
            return {
                ...state,
                inputName: data
            }
        case 'INPUT_DESCRIPTION_CHANGE':
            return {
                ...state,
                inputDescription: data
            }
        case 'SHOW_INPUT':
            return {
                ...state,
                inputWindow: data.toggleInput,
                inputDate: {
                    month: data.inputDate.month,
                    weekday: data.inputDate.weekday,
                    day: data.inputDate.day,
                    id: data.inputDate.id
                }
            }
        case 'POST_TASK':
            console.log([ ...state.calendarView, data ])
            return {
                ...state,
                calendarView: state.calendarView
                    .map(day => day.id === data.calendarDateId
                        ? { ...day, tasks: [data] }
                        : day)
            }
        default:
            return state;
    }
}

const store = new createStore(reducer)

export default store;