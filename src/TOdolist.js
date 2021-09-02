import React from 'react';
//import ReactDOM from 'react-dom';


class todo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            item: [],
            text:""            //item and text objects, item works as an array text is components of array.
        }

         this.handleSubmit =this.handleSubmit.bind(this);    // thats how you declare functon insisde the cndtrutor.*/}
        this.handleChange =this.handleChange.bind(this);
    }
    render() {
        return(
            <div>
                <h1>Todo List</h1>
                 <Todolist item={this.state.item} />     {/* calling function/component todolist to fed the data */}
                <form onSubmit={this.handleSubmit}>           {/*to input the text in array it should be fed to array */}

                    <input onChange={this.handleChange} value={this.text}/>     {/*onchange to print/channge the list while typing */}
                    
                     <button>ADD</button>
                </form>
            </div>

        );
    }

    handleChange(obj) {
        this.setState( {text: obj.target.value} ) ;       //setstate will continuosly set the text and target.value is the real time value of th input field.
    }

    handleSubmit(obj) {
        obj.preventDefault();

        if(!this.state.text) {
            return;
        }
        const newItem = {
            id: Date.now(),
            text: this.state.text
        }
        this.setState( itr =>({
            item: itr.item.concat(newItem),
            text : ""
        }));
    }
   
    
}
export default todo;
class Todolist extends React.Component {            //this will display the todo list.
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




