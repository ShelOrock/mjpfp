import store from './store';
import React, { Component } from 'react';
import toggleInput from './util';
import { createTask } from './axios.js'

class InputWindow extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({ state: store.getState() })
        })
    }

    render() {
        const { inputDate, inputName, inputDescription } = store.getState();
        const { month, weekday, day } = inputDate;
        return (
            <form>
                <p>Create a new task for { weekday }, { month } { day }</p>
                <p>Name</p>
                <input
                    type='text'
                    value={ inputName }
                    onChange={(e)=>
                        store.dispatch({
                            type: 'INPUT_NAME_CHANGE',
                            data: e.target.value,
                        })
                    }
                />
                <p>Description</p>
                <input
                    type='text'
                    value={ inputDescription }
                    onChange={(e)=>
                        store.dispatch({
                            type: 'INPUT_DESCRIPTION_CHANGE',
                            data: e.target.value,
                        })
                    }
                />
                <button onClick={(e)=> {
                    createTask(e)
                    toggleInput(e)
                }
                 }>Create Task</button>
                <button onClick={(e)=> toggleInput(e) }>Cancel</button>
            </form>
        )
    }
}


export default InputWindow