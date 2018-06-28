import axios from 'axios'

// const myTimeline = [
//     {name:'Ujang Khoirudin',status:'statusku1',waktu:'5 Minutes ago'},
//     {name:'Siti Aminah',status:'statusku2',waktu:'5 Minutes ago'},
//     {name:'Kiki Komarudin',status:'statusku3',waktu:'5 Minutes ago'}
// ]



export function allTimeline(){
    return {
        type: 'FETCH_ALL_TIMELINE',
        payload : axios.get('http://192.168.0.12:8000/api/timeline/')
    }
}

export function getTimeline(id){
    return {
        type: 'GET_TIMELINE',
        payload : axios.get('http://192.168.0.12:8000/api/timeline/'+id+'/')
    }
} 

export function addToTimeline(values){
    return {
        type: "ADD_TIMELINE",
        payload : axios({
            method:'post',
            url:'http://192.168.0.12:8000/api/timeline/',
            data:{
                name_id:2,
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
            url:'http://192.168.0.12:8000/api/timeline/'+id+'/',
            data:{
                like:likes+1,
            }
        })
    }
}


export function deleteTimeline(id){
    return {
        type: "DELETE_TIMELINE",
        payload : axios.delete('http://192.168.0.12:8000/api/timeline/'+id+'/')
    }
}

export function editToTimeline(id,status){
    return {
        type: "EDIT_TIMELINE",
        payload : axios({
            method:'patch',
            url:'http://192.168.0.12:8000/api/timeline/'+id+'/',
            data:{
                status:status,
            }
        })
    }
}

export function getComments(id){
    return {
        type: 'GET_COMMENTS',
        payload : axios.get('http://192.168.0.12:8000/api/comments/?timeline='+id)
    }
} 

export function addComment(comment,id){
    return {
        type:"ADD_COMMENTS",
        payload:axios({
            method:'post',
            url:'http://192.168.0.12:8000/api/comments/',
            data:{
                comment:comment,
                timeline_by_id:id,
                comment_by_id:2
            }
        })
    }
}

export function deleteComment(id){ 
    return{
        type:"DELETE_COMMENT",
        payload:axios.delete("http://192.168.0.12:8000/api/comments/"+id+"/")
    }
}

export function getSingleComment(id){ 
    return{
        type:"SINGLE_COMMENT",
        payload:axios.get("http://192.168.0.12:8000/api/comments/"+id)
    }
}

export function editComment(id,val) { 
    return {
        type:"EDIT_COMMENT",
        payload:axios({
            method:'patch',
            url:"http://192.168.0.12:8000/api/comments/"+id+"/",
            data:{
                comment:val,
            }
        })
    }
}