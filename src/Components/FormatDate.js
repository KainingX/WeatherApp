import React from 'react';

class FormatDate extends React.Component{
    render(){

        const time = this.props.date;

        return (<div>{time}</div>);
    }

}

export default FormatDate;
