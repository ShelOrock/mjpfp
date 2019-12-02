import React, { Component } from 'react';
import store from './store.js';
import { getCalendar } from './axios.js';
import MonthSelect from './monthSelect.js';
import Content from './content.js';
import InputWindow from './taskInputWindow.js'

class App extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({ state: store.getState() });
        });

        getCalendar(store.getState().currMonth)
    }

    render() {
        const { inputWindow } = store.getState();
        return (
            <div>
                { inputWindow ? <InputWindow /> : '' }
                <MonthSelect />
                <Content />
            </div>
        )
    }
}

export default App;