/**
 * Created by bluevia on 2016. 7. 21..
 */
import React, { Component }from 'react';
import ReactDOM from 'react-dom'

class Hello extends Component {
    render() {
        var place = "World";

        return (
            <h1>Hello { place }</h1>
        );
    }
}

class GroceryList extends Component{
    render(){
        return (
            <ul>
                <ListItem quantity="1" name="Bread" >빵</ListItem>
                <ListItem quantity="6" name="Eggs" >계란</ListItem>
                <ListItem quantity="2" name="Milk" >우유</ListItem>
            </ul>
        );
    }
}

class ListItem extends Component{
    render(){
        return (
            <li>
                {this.props.quantity} x {this.props.name} = {this.props.children}
            </li>
        );
    }
}

ReactDOM.render(<GroceryList />, document.getElementById('root'))