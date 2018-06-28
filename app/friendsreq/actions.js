import axios from 'axios'

export function allFriendsReq() { 
    return {
        type : "GET_FRIENDSREQ",
        payload : axios.get("http://192.168.0.12:8000/api/friendsreq")
    }
}