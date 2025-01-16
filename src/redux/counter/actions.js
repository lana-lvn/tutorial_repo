import { createAction } from "@reduxjs/toolkit";

// export const DECREMENT = { type: 'DECREMENT' };
// export const RESET = { type: 'RESET' };

// export const changeStep = (step) => {
//     return { type: 'CHANGE_STEP', payload: step }; 
// };

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const changeStep = createAction('changeStep');