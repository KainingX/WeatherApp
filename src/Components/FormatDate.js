import React, { Component } from 'react';

class FormatDate extends Component{
    render(){
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

        const time = new Date(this.props.date*1000);

        const day = time.getDate();

        const month = months[time.getMonth()];

        const year = time.getFullYear();

        const min = time.getMinutes();

        let hour = time.getHours();

        //convert hour into 12-hour system
        if (hour > 12){
            hour = hour - 12;
            const date = day+'-'+month+"-"+year+", "+ hour+":"+min+"PM";

            return (<span>{date}</span>);
        }

        else{
            const date = day+'-'+month+"-"+year+", "+ hour+":"+min+"AM";

            return (<span>{date}</span>);
        }


    }

}

export default FormatDate;
