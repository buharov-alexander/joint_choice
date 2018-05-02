/* eslint-disable no-unused-vars,no-console */

const loggingMiddleware = store => next => (action) => {
  console.info('%cINFO:', 'color: green', `Dispatching a ${action.type} action with payload:`, action.payload);
  return next(action);
};

export default loggingMiddleware;

/* eslint-disable no-unused-vars,no-console */
