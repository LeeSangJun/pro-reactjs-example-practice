/**
 * Created by bluevia on 2016. 7. 22..
 */
import React, { Component } from 'react'
import CheckList from './CheckList';

class Card extends Component{

    constructor(){
        super(...arguments);    //... Opnterator : 전개연산자 식이 여러 인수나 여러 요소 또는 여러 변수(비 구조화 할동용가 예성되는 곳에 확장될 수 있도록 합니다)
        this.state = {
            showDetails: false
        }
    }

    toggleDetails(){
        this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        let cardDetails;
        if (this.state.showDetails){
            cardDetails = (
                <div className="card__details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            )
        }

        return (
            <div className="card">
                {/*자식 주석은 이렇게 답니다*/}
                <div className={
                    this.state.showDetails? "card__title card__title--is-open": "card__title"
                    } onClick={this.toggleDetails.bind(this)}> { this.props.title } </div>
                { cardDetails }
            </div>
        )
    }
}

export default Card;
