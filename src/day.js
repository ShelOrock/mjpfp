import React from 'react'
import toggleInput from './util.js'
import { removeTask } from './axios.js'

const Day = (_day) => {
    const { id, month, weekday, day, tasks } = _day;
    return (
        <li>
            <h3>{ day }</h3>
            <h4>{ weekday }</h4>
            <ul>
                {
                    tasks.length ? tasks.map(task => {
                        return (
                            <ul key={ task.id }>
                                <li>{ task.name }</li>
                                <li>{ task.description }</li>
                                <button onClick={()=> updateTask() }>EDIT</button>
                                <button onClick={(e)=> removeTask(e) }>REMOVE</button>
                            </ul>
                        )
                    })
                    : ''
                }
            </ul>
            <button onClick={(e)=> toggleInput(e, id, month, weekday, day)}>Add Task</button>
        </li>
    );
}

export default Day;