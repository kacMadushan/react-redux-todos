import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

import ErrorMessage from './ErrorMessage';

class AddTodo extends React.Component {
    state = {
        todo: '',
        error: undefined
    }

    onTodoChange = (e) => {
        const todo = e.target.value;
        this.setState(() => ({ todo }));
    }

    handleAddNewTodo = (todo) => {
        if (!todo) {
            return 'Enter valid value to add item';
        } else if (this.props.todos.indexOf(todo) > -1) {
            return 'This option already exists';
        }

        this.props.dispatch(addTodo(todo));
    }

    handleOnClick = (e) => {
        e.preventDefault();
        const todo = this.state.todo.trim();
        const error = this.handleAddNewTodo(todo);
        this.setState(() => ({ error }));

        if(!error) {
            this.state.todo = ''
        }
    }
    
    render() {
        const { error } = this.state
        return (
            <div className="add-todo">
                {this.state.error && (<ErrorMessage error={error} />)}
                <form>
                    <div className="form-group input-group">
                        <input 
                            type="text"
                            className="form-control custom-input " 
                            placeholder="Add Your Todo"
                            value={this.state.todo} 
                            onChange={this.onTodoChange}    
                        />
                    </div>
                    <button 
                        className="btn big-button btn-lg btn-block"
                        onClick={this.handleOnClick}
                    >
                        Add Todo
                    </button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps)(AddTodo);