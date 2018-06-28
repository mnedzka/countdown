import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {

    state = {
        deadline: 'December 25, 2018',
        newDeadline: '',
    }

    changeDeadline = (e) => {
        e.preventDefault();
        this.setState({
            deadline: this.state.newDeadline,
        })
    }

    render() {
        return (
            <div className="App">
               <div>
                   <span className="App__heading">{this.state.deadline}</span>
                   <Clock 
                    deadline={this.state.deadline}
                   />
               </div>
               <form>
                <input 
                    placehoder="Write your date..." 
                    onChange={e => this.setState({newDeadline: e.target.value})}
                />
                <button onClick={this.changeDeadline}>Submit</button>
               </form>
            </div>
        );
    }
}

export default App;