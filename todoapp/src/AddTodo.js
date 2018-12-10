import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.adTo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add new Todo:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}></input>
            </form>
        )
    }
}

export default AddTodo;