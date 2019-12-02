import { createStore } from 'redux';

const initialState = {
    currMonth: 4,
    calendarView: [],
    inputWindow: false,
    editWindow: false,
    inputDate: {
        month: '',
        weekday: '',
        day: 0,
        id: 0,
    },
    inputName: '',
    inputDescription: '',
    taskToEdit: null,
    editName: '',
    editDescription: '',
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
        case 'EDIT_NAME_CHANGE':
            return {
                ...state,
                editName: data
            }
        case 'EDIT_DESCRIPTION_CHANGE':
            return {
                ...state,
                editDescription: data
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
        case 'SHOW_EDIT':
            return {
                ...state, 
                editWindow: data.toggleEdit,
                taskToEdit: data.taskToEdit
            }
        case 'POST_TASK':
            return {
                ...state,
                calendarView: state.calendarView
                    .map(day => day.id === data.calendarDateId
                        ? { ...day, tasks: [...day.tasks, data] }
                        : day)
            }
        case 'EDIT_TASK':
            return {
                ...state,
                calendarView: [...state.calendarView
                    .map(day => {
                        day.tasks.length
                        ? { ...day, tasks: [ day.tasks.filter(task => task.id === data.id) ] }
                        : { ...day } 
                    })
                    ]
             }

        case 'DELETE_TASK': 
            return {
                ...state,
                calendarView: state.calendarView
                    .map(day => day.tasks.length
                        ? { ...day, tasks: [ day.tasks.filter(task => task.id !== data) ] }
                        : { ...day } )
            }
        default:
            return state;
    }
}

const store = new createStore(reducer)

export default store;