const initialState = {
    results: [], //GET ALL
    Getdata: {},  //GET by ID
    add:{},
    test:{},
    like:{},
    isLoading: false
}

const timelineReducer = ( state = initialState , action )=>{
    switch (action.type) {
        case "FETCH_ALL_TIMELINE_PENDING":
            return {...state, isLoading: true}
        case "FETCH_ALL_TIMELINE_FULFILLED":
            return {...state, isLoading: false, results: action.payload.data}
        case "GET_TIMELINE_PENDING":
            return {...state, isLoading: true}
        case "GET_TIMELINE_FULFILLED":
            return {...state,isLoading:false, Getdata:action.payload.data}
        case "GET_TIMELINE_REJECTED":
            alert('REJECTED')
            return {...state , isLoading:false , Getdata:action.payload.data}
        case "ADD_TIMELINE_PENDING":
            return { ...state , isLoading:true}
        case "ADD_TIMELINE_FULFILLED":
            state.results.push(action.payload.data);
            return { ...state , isLoading:false }
        case "ADD_TIMELINE_REJECTED":
            return { ...state , isLoading:false  ,add : action.payload.data}
        case "DELETE_TIMELINE_PENDING":
            return { ...state , isLoading:true}
        case "DELETE_TIMELINE_FULFILLED":
            return { ...state , isLoading:false ,test : alert("Berhasil Dihapus")}
        case "DELETE_TIMELINE_REJECTED":
            return { ...state , isLoading:false ,test : action.payload.data}  
        case "ADD_LIKE_FULFILLED":
            return { ...state , isLoading:false , like : alert('liked')}
        case "ADD_LIKE_REJECTED":
            return { ...state , isLoading:false ,test : action.payload.data}
        case "EDIT_TIMELINE_PENDING":
            return { ...state, isLoading: true }
        case "EDIT_TIMELINE_FULFILLED":
            // state.results.push(action.payload.data);
            return { ...state, isLoading: false }    
        
        default:
            return state
    }
}

export default timelineReducer