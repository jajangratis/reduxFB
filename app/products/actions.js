import axios from 'axios'

export function allProducts(){
    return {
        type: 'ALL_PRODUCTS',
        payload: axios.get('http://rest.learncode.academy/api/dumbways/products')
    }
}

export function getProduct(id){
  return {
    type: 'GET_PRODUCT',
    payload: axios.get(`http://rest.learncode.academy/api/dumbways/products/${id}`)
  }
}
