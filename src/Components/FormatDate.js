import React, { Component } from 'react';

class FormatDate extends Component{
    render(){
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

        const time = new Date(this.props.date*1000);

        const day = time.getDay();

        const month = months[time.getMonth()];

        const year = time.getFullYear();

        const date = day+'-'+month+"-"+year

        return (<span>{date}</span>);
    }

}

export default FormatDate;
