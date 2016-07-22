/**
 * Created by bluevia on 2016. 7. 22..
 */
import React, { Component } from 'react'
import CheckList from './CheckList';

class Card extends Component{
    render() {
        return (
            <div className="card">
                <div className="card__title">{this.props.title}</div>
                <div className="card__details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            </div>
        )
    }
}

export default Card;
