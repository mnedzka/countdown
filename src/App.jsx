import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        deadline: '',
    }

    changeDeadline() {
        this.setState({

        })
    }

    render() {
        return (
            <div className="App">
               <div>
                   <span className="App__heading">{this.state.deadline}</span>
                   <ul>
                       <li className="clock__days"></li>
                       <li className="clock__hours"></li>
                       <li className="clock__minutes"></li>
                       <li className="clock__seconds"></li>
                   </ul>
               </div>
               <form>
                <input placehoder="Write your date..." />
                <button onClick={() => this.changeDeadline}>Submit</button>
               </form>
            </div>
        );
    }
}

export default App;