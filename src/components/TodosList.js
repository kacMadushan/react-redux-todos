import React from 'react';
import { connect } from 'react-redux';
import TodosHeading from './TodosHeading';
import Todo from './Todo';

const TodosList = (props) => (
    <div className="row">
        <TodosHeading {...props} />
        <div className="col-md-12">
            <ul className="list-group list-of-todos">
                {props.todos.map((todo) => <Todo key={todo.id} {...todo} />)}
            </ul>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosList);