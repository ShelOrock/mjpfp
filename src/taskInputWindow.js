import store from './store';
import React, { Component } from 'react';
import { toggleInput } from './util';
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
            <div className='form-container'>
                <form className='form'>
                    <h2>Create a new task for { weekday }, { month } { day }</h2>
                    <div className='input-container'>
                        <div className='input-field'>
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
                        </div>
                        <div className='input-field'>
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
                        </div>
                    </div>
                    <div className='button-container'>
                        <button className='btn add-task task-btn' onClick={(e)=> {
                            createTask(e)
                            toggleInput(e)
                        }
                         }>Create Task</button>
                        <button className='btn add-task task-btn' onClick={(e)=> toggleInput(e) }>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default InputWindow