import axios from 'axios'

// const myTimeline = [
//     {name:'Ujang Khoirudin',status:'statusku1',waktu:'5 Minutes ago'},
//     {name:'Siti Aminah',status:'statusku2',waktu:'5 Minutes ago'},
//     {name:'Kiki Komarudin',status:'statusku3',waktu:'5 Minutes ago'}
// ]

export function allTimeline(){
    return {
        type: 'FETCH_ALL_TIMELINE',
        payload : axios.get('http://192.168.43.84:8000/api/timeline/')
    }
}

export function getTimeline(id){
    return {
        type: 'GET_TIMELINE',
        payload : axios.get('http://192.168.43.84:8000/api/timeline/'+id+'/')
    }
} 

export function addToTimeline(values){
    return {
        type: "ADD_TIMELINE",
        payload : axios({
            method:'post',
            url:'http://192.168.43.84:8000/api/timeline/',
            data:{
                name:"Trian Afiansyah",
                status:values,
                
            }
        })
    }
}

export function likepostbyId(id,likes){
    return {
        type: "ADD_LIKE",
        payload : axios({
            method:'patch',
            url:'http://192.168.43.84:8000/api/timeline/'+id+'/',
            data:{
                like:likes+1,
            }
        })
    }
}


export function deleteTimeline(values){
    return {
        type: "DELETE_TIMELINE",
        payload : axios.delete('http://192.168.43.84:8000/api/timeline/'+values+'/')
    }
}

export function editToTimeline(id,status){
    return {
        type: "EDIT_TIMELINE",
        payload : axios({
            method:'patch',
            url:'http://192.168.43.84:8000/api/timeline/'+id+'/',
            data:{
                status:status,
            }
        })
    }
}


// axios.post('http://192.168.43.84 :8000/api/timeline/', values),
//CONTOH POST??
// axios({
//     url: 'http://localhost:5000/api/hello',
//     method: 'POST',
//     data: formData,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'multipart/form-data'
//     }
//   })

//payload: axios.get('http://rest.learncode.academy/api/dumbways/products')
//payload https://api.backendless.com/34B1CF67-8590-C04C-FF6D-B2D9688B0400/7555CCD7-9AB5-6EC1-FF64-DB102E2FBE00/data/timeline/(objectidnya)?&loadRelations=name