import React, {Component} from 'react'
import {Container, Content, Text, List, ListItem, Spinner} from 'native-base'
import {connect} from 'react-redux'

import {allProducts, getProduct} from '../actions'

class ProductsList extends Component{

  componentDidMount(){
    this.props.dispatch(allProducts())
  }

  handleGetProduct(id){
    this.props.dispatch(getProduct(id))
  }

  render(){
    return (
      <Container>
        <Content>
          {this.props.products.isLoading? (
            <Spinner/>
          ): (
            <List>
              {this.props.products.results.map((product, i)=> (
                <ListItem key={i} onPress={()=> this.handleGetProduct(product.id)}>
                  <Text>{product.name}</Text>
                </ListItem>
              ))}
            </List>
          )}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>({
  products: state.productsReducer
})

export default connect(mapStateToProps)(ProductsList)
