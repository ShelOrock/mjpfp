import React from 'react'
import { toggleInput, toggleEdit } from './util.js'
import { removeTask, editTask } from './axios.js'

const Day = (_day) => {
    const { id, month, weekday, day, tasks } = _day;
    return (
        <li className='day'>
            <h4>{ weekday }</h4>
            <h3>{ day }</h3>
            <ul className='task-list'>
                {
                    tasks.length ? tasks.map(task => {
                        return (
                                <li className='list-item' key={ task.id }>
                                    <p><b>Name:</b> { task.name }</p>
                                    <p><b>Description:</b> { task.description }</p>
                                <button className='btn list-item-btn' onClick={(e)=> toggleEdit(e, id, month, weekday, day, task.id) }>EDIT</button>
                                <button className='btn list-item-btn' onClick={(e)=> removeTask(e, task.id) }>REMOVE</button>
                                </li>
                        )
                    })
                    : ''
                }
            </ul>
            <button className='btn add-task' onClick={(e)=> toggleInput(e, id, month, weekday, day)}>Add Task</button>
        </li>
    );
}

export default Day;