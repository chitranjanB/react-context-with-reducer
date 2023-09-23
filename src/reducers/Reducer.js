
export const initialstate = {
    items: [],
}


export const cartreducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            if (action.payload === "" || state.items.includes(action.payload)) {
                return state
            }
            return {
                items: [...state.items, action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(x => x.name !== action.payload.name)
            }
        case "ADD_COUNT":
            const addItems = state.items.map(item => {
                if (item.name === action.payload.name) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
            return {
                ...state,
                items: addItems
            }
        case "MINUS_COUNT":
            const minusItems = state.items.map(item => {
                if (item.name === action.payload.name) {
                    return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                }
                return item;
            })
            return {
                ...state,
                items: minusItems
            }
        default:
            return state
    }
}