import React from 'react';
//import ReactDOM from 'react-dom';
class todolist extends React.Component {            //this will display the todo list.
    render() {
        return(
            <ul>
                {this.props.item.map(itr => (
                    <li key={this.id}> {itr.text} </li>
                ))}
            </ul>
        );
    }
}
export default todolist;