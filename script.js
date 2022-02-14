// Establish DOM elements as variables
const grocerySubmit = document.getElementById('addGrocery')
const list = document.getElementById('list')
const clearBtn = document.getElementById('clear')

// Instantiate default state value:
const initialState = {
    groceries: []
}

const groceryReducer = (state = initialState.groceries, action) => {
    switch(action.type){
        case 'grocery/add':
            return [
                ...state,
                {
                    text: action.text
                }
            ]
            case 'grocery/clear':
                return []
                default: 
                return state
    }
}