export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text: text
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
});

export const selectTodo = (id) => ({
    type: 'SELECT_TODO',
    id
});

export const addComment = (id, text) => ({
    type: 'ADD_COMMENT',
    text: text,
    id: id
});

