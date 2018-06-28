import axios from 'axios'

export function allmarkets() { 
    return {
        type : "GET_MARKETS",
        payload : axios.get("http://192.168.0.12:8000/api/markets")
    }
}