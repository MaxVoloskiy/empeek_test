const initialState = [
    {
        text: 'New todo',
        selected: true,
        id: 0,
        comments: []
    }
];

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.map(todo => ({
                ...todo,
                selected: false
            })).concat([
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    text: action.text,
                    comments: [],
                    selected: true
                }
            ])
        case 'DELETE_TODO':
            return state.filter(todo =>
                todo.id !== action.id
            )
        case 'SELECT_TODO':
            return state.map(todo => {
                if (action.id !== todo.id) {
                    return {
                        ...todo,
                        selected: false
                    };
                }
                return {
                    ...todo,
                    selected: true
                }
            });
        case 'ADD_COMMENT':
            return state.map(todo => {
                if (action.id === todo.id) {
                    return {
                        ...todo,
                        comments: [
                            ...todo.comments,
                            action.text
                        ]
                    }
                }
                return todo;
            });
        default:
            return state;
    }
};

export default todos;
