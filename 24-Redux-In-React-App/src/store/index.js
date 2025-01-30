import {
    createStore
} from "redux";

const INITIAL_VALUE = {
    counter: 0,
    privacy: false
}

const reducer = (store = INITIAL_VALUE, action) => {
    if (action.type === 'INCREASE') {
        return {
            ...store,
            counter: store.counter + 1
        }
    } else if (action.type === 'DECREASE') {

        return {
            ...store,
            counter: store.counter - 1
        }
    } else if (action.type === 'ADD') {

        return {
            ...store,
            counter: store.counter + Number(action.payload.num)
        }
    } else if (action.type === 'SUBTRACT') {

        return {
            ...store,
            counter: store.counter - Number(action.payload.num)
        }
    } else if (action.type === 'PRIVACY_TOGGLE') {

        return {
            ...store,
            privacy: !store.privacy
        }
    }
    return store;
}

const store = createStore(reducer);

export default store;