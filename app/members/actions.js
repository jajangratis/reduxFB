import axios from 'axios'

export function getmember() {
    return {
        type: "GET_MEMBER",
        payload: axios.get("http://192.168.0.12:8000/api/Members/")
    }
    
}