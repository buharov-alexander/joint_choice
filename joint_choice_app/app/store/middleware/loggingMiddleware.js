const loggingMiddleware = store => next => action => {
    console.info('%cINFO:', 'color: green', `Dispatching a ${action.type} action with payload:`, action.payload);
    const result = next(action);
};

export default loggingMiddleware;