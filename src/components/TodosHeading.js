import React from 'react';
import { connect } from 'react-redux';
import { removeAllTodos } from '../actions/todos';

const TodosHeading = ({ dispatch, todos }) => {
    let showRemoveAll = null;
    if(todos.length > 0) {
        showRemoveAll = (
            <button 
                className="btn remove-all"
                onClick={() => dispatch(removeAllTodos())}
            >
                Remove All
            </button>
        );
    };
    return (
        <React.Fragment>
            <div className="col-md-8">
                <div className="heading">
                    <h3 className="headline">Your todo list</h3>
                </div>
            </div>
            <div className="col-md-4">
                <div className="button-line">
                    {showRemoveAll}
                </div>
            </div>
        </React.Fragment>
    );
};


export default connect()(TodosHeading);