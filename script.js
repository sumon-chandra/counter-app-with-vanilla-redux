// Get the elements
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const counter = document.getElementById('counter');

// Initial state
const initialState = {
    value: 0
}

// Create reducer function
const createReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1
        }
    }
    else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1
        }
    } else {
        return state
    }
}

// Create store
const store = Redux.createStore(createReducer)
const render = () => {
    const state = store.getState()
    counter.innerText = state.value
}

// Update UI initially
render()

// Update UI
store.subscribe(render)

// Event handlers
increment.addEventListener('click', () => {
    store.dispatch({
        type: 'increment',
    })
})
decrement.addEventListener('click', () => {
    store.dispatch({
        type: 'decrement',
    })
    // console.log('Clicks clicked');
})