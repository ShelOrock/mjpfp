import store from './store';
import React, { Component } from 'react';
import { toggleEdit } from './util';
import { createTask, editTask} from './axios.js'

class EditWindow extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({ state: store.getState() })
        })
    }

    render() {
        const { taskToEdit, editName, editDescription } = store.getState();
        return (
            <div className='form-container'>
                <form className='form'>
                    <h2>Edit task</h2>
                    <div className='input-container'>
                        <div className='input-field'>
                            <p>Name</p>
                            <input
                                type='text'
                                value={ editName }
                                onChange={(e)=>
                                    store.dispatch({
                                        type: 'EDIT_NAME_CHANGE',
                                        data: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className='input-field'>
                            <p>Description</p>
                            <input
                                type='text'
                                value={ editDescription }
                                onChange={(e)=>
                                    store.dispatch({
                                        type: 'EDIT_DESCRIPTION_CHANGE',
                                        data: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className='button-container'>
                        <button className='btn add-task task-btn' onClick={(e)=> {
                            editTask(e, taskToEdit)
                            toggleEdit(e)
                        }
                         }>Edit Task</button>
                        <button className='btn add-task task-btn' onClick={(e)=> toggleInput(e, taskToEdit) }>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default EditWindow