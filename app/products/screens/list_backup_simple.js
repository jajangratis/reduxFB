import React, {Component} from 'react'
import {Container, Content, Text, List, ListItem} from 'native-base'
import {connect} from 'react-redux'

import {allProducts} from '../actions'

class ProductsList extends Component{

  // state = {
  //   products: [
  //     {name: 'Bambang'},
  //     {name: 'Syahrini'},
  //   ]
  // }

  componentDidMount(){
    this.props.dispatch(allProducts())
  }

  render(){
    return (
      <Container>
        <Content>
          <List>
            {this.props.products.results.map((product, i)=> (
              <ListItem key={i}>
                <Text>{product.name}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>({
  products: state.productsReducer
})

export default connect(mapStateToProps)(ProductsList)
