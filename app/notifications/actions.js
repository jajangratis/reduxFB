import axios from 'axios'

// const dataNotif = [
//     {id:1,name:'Ujang',notif:'Comment',time:'5 minute ago'},
//     {id:2,name:'Ujang',notif:'Comment',time:'5 minute ago'},
//     {id:3,name:'Ujang',notif:'Comment',time:'5 minute ago'},
//     {id:4,name:'Ujang',notif:'Comment',time:'5 minute ago'},
// ]

export function allNotifications(){
    return {
        type: "FETCH_ALL_NOTIFICATIONS",
        payload : axios.get('http://192.168.0.12:8000/api/notifications/'),

    }
}

// export function getNotifications(id){
//     return {
//       type: 'GET_NOTIFICATIONS',
//       payload: axios.get(`https://api.backendless.com/34B1CF67-8590-C04C-FF6D-B2D9688B0400/7555CCD7-9AB5-6EC1-FF64-DB102E2FBE00/data/timeline/${id}`)
//     }
//   }