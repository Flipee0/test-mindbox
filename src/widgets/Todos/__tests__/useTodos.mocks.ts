export const mockInitialTodos = [
    {
        id: '1',
        text: 'Go to work',
        isDone: false,
    },
    {
        id: '2',
        text: 'Go to shop',
        isDone: true,
    },
    {
        id: '3',
        text: 'Cleaning',
        isDone: false,
    },
];

export const mockTodoToAdd = {
    id: '4',
    text: 'Wash car',
    isDone: false,
};

export const mockTodosAfterRemove = [
    {
        id: '1',
        text: 'Go to work',
        isDone: false,
    },
    {
        id: '3',
        text: 'Cleaning',
        isDone: false,
    },
];

export const mockTodosAfterChangeCompleteness = [
    {
        id: '1',
        text: 'Go to work',
        isDone: true,
    },
    {
        id: '2',
        text: 'Go to shop',
        isDone: true,
    },
    {
        id: '3',
        text: 'Cleaning',
        isDone: false,
    },
];

export const mockTodosAfterChangeCompletenessAndRemove = [
    {
        id: '3',
        text: 'Cleaning',
        isDone: false,
    },
];

export const mockTodosAfterSetSearch = [
    {
        id: '1',
        text: 'Go to work',
        isDone: false,
    },
    {
        id: '2',
        text: 'Go to shop',
        isDone: true,
    },
];

export const mockTodosAfterSetSearchAndFilterCompleted = [
    {
        id: '2',
        text: 'Go to shop',
        isDone: true,
    },
];

export const mockTodosAfterSetSearchAndFilterActive = [
    {
        id: '1',
        text: 'Go to work',
        isDone: false,
    },
];

export const mockTodosAfterFilterActive = [
    {
        id: '1',
        text: 'Go to work',
        isDone: false,
    },
    {
        id: '3',
        text: 'Cleaning',
        isDone: false,
    },
];
