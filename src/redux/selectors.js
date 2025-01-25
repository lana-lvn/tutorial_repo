import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = state => state.todos.todos;
export const selectFilter = state => state.todos.filter;
export const selectIsLoading = state => state.todos.isLoading;
export const selectIsError = state => state.todos.isError;
export const selectFilterByStatus = state => state.todos.filterByStatus;

// export const selectFilteredTodos = state => {
//     console.log('Filtered data');

//     const todos = selectTodos(state);
//     const filterByStatus = selectFilterByStatus(state);
    
//     switch (filterByStatus) {
//         case 'completed':
//             return todos.filter(item => item.isCompleted);
//         case 'active':
//             return todos.filter(item => !item.isCompleted);

//         default:
//             return todos;
//     };
// };

export const selectFilteredTodosMemo = createSelector([selectTodos, selectFilterByStatus], (todos, filterByStatus) => {
    console.log('Filtered data');

  switch (filterByStatus) {
        case 'completed':
            return todos.filter(item => item.isCompleted);
        case 'active':
            return todos.filter(item => !item.isCompleted);

        default:
            return todos;
    };
});

// export const selectUncompletedTodos = state => {
//     console.log('Uncompleted logic');
    
//     const todos = selectTodos(state);
//     return todos.reduce((total, curr) => (!curr.isCompleted ? total + 1 : total), 0);
// };

export const selectUncompletedTodosMemo = createSelector([selectTodos], todos => {
    console.log('Uncompleted logic');
    
    return todos.reduce((total, curr) => (!curr.isCompleted ? total + 1 : total), 0);
});