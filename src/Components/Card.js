import React from 'react';


class Card extends React.Component{
    render(){
        return(
            <div>
            <div> Temperature:<span> {this.props.temperature}</span> </div>
            <div> City:<span> {this.props.city}</span> </div>
            <div> Country:<span> {this.props.country}</span> </div>
            </div>

        )
    }


}

export default Card;
