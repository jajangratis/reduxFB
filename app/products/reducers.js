const initialState = {
    results: [], //GET ALL
    data: {},  //GET by ID
    isLoading: false
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_PRODUCTS_PENDING':
            return {...state, isLoading: true}
        case 'ALL_PRODUCTS_FULFILLED':
            return {...state, isLoading: false, results: action.payload.data}
        case 'GET_PRODUCT_PENDING':
            return {...state, isLoading: true}
        case 'GET_PRODUCT_FULFILLED':
            return {...state, isLoading: false, data: action.payload.data}
        default:
            return state
    }
}

export default productsReducer
