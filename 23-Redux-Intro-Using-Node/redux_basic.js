const redux = require('redux');

const INITIAL_VALUE = {
    counter: 0
}

const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;

    if (action.type === 'INCREMENT') {
        newStore = {
            counter: store.counter + 1
        }
    } else if (action.type === 'DECREMENT') {
        newStore = {
            counter: store.counter - 1
        }
    } else if (action.type === 'ADD') {
        newStore = {
            counter: store.counter + action.payload.number
        }
    }

    return newStore;
}

const store = redux.createStore(reducer);

const subscriber = () => {
    const data = store.getState();
    console.log(data);
}

store.subscribe(subscriber);

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'ADD',
    payload: {
        number: 7,
    }
});