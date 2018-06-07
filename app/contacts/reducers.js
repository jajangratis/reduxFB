const initialState = {
    results: [],
    isLoading: false,
    isError: false,
    isSuccess: false
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CONTACTS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'ALL_CONTACTS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                results: action.payload.data
            }
        case 'ALL_CONTACTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                results: action.payload.data
            }

        case 'CREATE_CONTACTS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'CREATE_CONTACTS_FULFILLED':
            state.results.push(action.payload.data);
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true
            }
        case 'CREATE_CONTACTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false
            }
        default:
            return state
    }
}

export default contactsReducer