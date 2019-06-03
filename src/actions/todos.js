import uuid from 'uuid';
// Todos Action 

// ADD_TODO
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    todos: {
        id: uuid(),
        text
    }
});

// REMOVE_ALL_TODOS
export const removeAllTodos = () => ({
    type: 'REMOVE_ALL_TODOS'
});

// REMOVE_TODO
export const removeTodo = ({id}) => ({
    type: 'REMOVE_TODO',
    id
});