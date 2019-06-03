import uuid from 'uuid';

// Todos Reducer
const todosDefaultSate = [{ id: uuid(), text: 'Hello todo'}];

export default (state = todosDefaultSate, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todos
            ]
        case 'REMOVE_ALL_TODOS':
            return []
        case 'REMOVE_TODO':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    };
};