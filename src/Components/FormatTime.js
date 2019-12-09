import React, { Component } from 'react';

class FormatTime extends Component{
    render(){

        const date = new Date(this.props.time*1000);

        let hour = date.getHours();
        const min = date.getMinutes();

        //convert hour into 12-hour system
        if (hour > 12){
            hour = hour - 12;
            const time = hour+":"+min+"PM"

            return (<span>{time}</span>);
        }

        else{
            const time = hour+":"+min+"AM"

            return (<span>{time}</span>);
        }


    }

}

export default FormatTime;
