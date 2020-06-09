import React from 'react'
import {Container, Row,Col,Badge,Image} from 'react-bootstrap'
import dishes from '../data/menu.json'
import DishComments from './DishComments'

class DishDetail extends React.Component{
  state={
        dish:null
  }
  componentDidMount = ()=>{
    const dishId = this.props.match.params.id
    const dish = dishes.find(dish => dishId === dish.id.toString())
    console.log('my dish is ' , dish)
    this.setState({dish})
    //same as {dish:dish}
  }
  render(){
    console.log('props' , this.props)
    return(
  
      <Container>
        <Row>
          <Col>
          {!this.state.dish&&<h1>Loading...</h1>}
          {this.state.dish&& <Row>
            <Col md={8} className="ml-auto mr-auto">
              <Row>
              <Col md={4}>
              <Image src={"/"+this.state.dish.image} className="my-2 w-100 h-auto"></Image>
              </Col>
              <Col md={8} className="mt-auto mb-auto">
              <h4>
                {this.state.dish.name}
                <Badge variant="warning" className="ml-2">
                  {this.state.dish.price}
                </Badge>
                <Badge variant="danger" className="ml-2">
                  {this.state.dish.label}
                </Badge>
              </h4>
              {this.state.dish.description}
            </Col>
            </Row>
          </Col>
        </Row>
        }
          </Col>
        </Row>
        <DishComments selectedDish={this.state.dish} />
      </Container>
    )
  }
}

export default DishDetail