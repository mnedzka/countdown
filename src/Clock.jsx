import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor(time/(1000*60*60)%24);
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({days, hours, minutes, seconds});
    }

    zeroBased(num){
        if(num < 10) {
            return '0' + num;
        }
        return num
    }

    render() {
        return (
            <div>                
                <div className="clock__days">{this.zeroBased(this.state.days)} days</div>
                <div className="clock__hours">{this.zeroBased(this.state.hours)} hours</div>
                <div className="clock__minutes">{this.zeroBased(this.state.minutes)} minutes</div>
                <div className="clock__seconds">{this.zeroBased(this.state.seconds)} seconds</div>                
            </div>
        );
    }
}

export default Clock;