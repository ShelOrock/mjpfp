import React, { Component } from 'react';
import store from './store';
import Day from './day';

class Content extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.setState({ state: store.getState() })
        })
    }

    render() {
        const { calendarView } = store.getState();
        return (
            calendarView.length
            ? 
                <ul>
                    {
                        calendarView.map(day => {
                            return (
                                <Day
                                    key={ day.id }
                                    id={ day.id }
                                    day={ day.day }
                                    weekday={ day.weekday }
                                    month={ day.month }
                                    tasks={ day.tasks }
                                />
                            );
                        })
                    }
                </ul>
            : 'Loading...'
        )
    }
}

export default Content;