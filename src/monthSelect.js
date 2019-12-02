import React, { Component } from 'react';
import store from './store';
import { getCalendar } from './axios';

class MonthSelect extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({ state: store.getState() })
        });
    }

    render() {
        const { currMonth, calendarView } = store.getState();
        return (
            <div>
                <button onClick={() => getCalendar(currMonth - 1) }>Prev</button>
                <h1>
                    {
                        calendarView.length
                            ? calendarView[0].month
                            : 'Loading Month...'
                    }
                </h1>
                <button onClick={() => getCalendar(currMonth + 1) }>Next</button>
            </div>
        )
    }
}

export default MonthSelect;