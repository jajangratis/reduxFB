const initialState = {
    results:[],
    data:{},
    isLoading:false
}

const notificationsReducer = ( state = initialState , action )=>{
    switch (action.type) {
        case "FETCH_ALL_NOTIFICATIONS_PENDING":
            return {...state , isLoading:true}
        case "FETCH_ALL_NOTIFICATIONS":
            return {...state , results : action.payload}
        case "FETCH_ALL_NOTIFICATIONS_REJECTED":
            return {...state , results : action.payload}
        default:
            return state
    }
}