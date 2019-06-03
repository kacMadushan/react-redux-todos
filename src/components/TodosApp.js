import React from 'react';
import { connect } from  'react-redux';
import Wrapper from './Wrapper';
import Header from './Header';
import TodosList from './TodosList';
import AddTodo from './AddTodo';

class TodosApp extends React.Component {
    render() {
        return (
            <div className="container">
                <Wrapper>
                    <Header />
                    <TodosList />
                    <AddTodo />
                </Wrapper>
            </div>
        );
    };
};

export default connect()(TodosApp);