import axios from 'axios';

export function allContacts(){
    return {
        type: 'ALL_CONTACTS',
        payload: axios({
            method: 'GET',
            url: 'http://192.168.0.5:3000/contacts'
        })
    }
}

export function createContacts(value){
    return {
        type: 'CREATE_CONTACTS',
        payload: axios({
            method: 'POST',
            url: 'http://192.168.0.5:3000/contacts',
            data: value
        })
    }
}