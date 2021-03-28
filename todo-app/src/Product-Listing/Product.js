import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';


const products = [
  {
    id: 1,
    name: 'TeamSpirit',
    images: 'https://ohtopten.com/wp-content/uploads/2015/08/Best-T-shirts-for-men-7.jpg',
    category: 'Shirts',
    price: 500
  },
  {
    id: 2,
    name: 'Baby Peekaboo',
    images: 'http://www.happybabycompany.com/assets/images/indestructibles/workmanindestructiblesbabypeekaboo.png',
    category: 'Books',
    price: 400,
  },
  {
    id: 3,
    name: 'Female-Waterproof-Clock',
    images: 'https://ae01.alicdn.com/kf/HTB1CYDuocnI8KJjSspeq6AwIpXal/Luxury-Women-Watches-Simple-Ladies-Steel-Watch-Rose-Gold-Elegant-Minimalism-Casual-Black-Female-Waterproof-Clock.jpg',
    category: 'Watches',
    price: 300,
  },
  {
    id: 4,
    name: 'Geneva-Women-Watches',
    images: 'https://ae01.alicdn.com/kf/HTB1dGOnOFXXXXc9XpXXq6xXFXXXe/2016-Fashion-Watch-Geneva-Women-Watches-Women-s-Dress-Classical-Stainless-Steel-Band-Quartz-Wrist-Watches.jpg',
    category: 'Watches',
    price: 300,
  },
  {
    id: 5,
    name: 'Charlie Cooks Favourite Book',
    images: 'https://www.jonkers.co.uk/uploads/00054/00054737.jpg?v=1',
    category: 'Books',
    price: 300,
  }
]
class Product extends Component {
state = {
  checked: false,
  prod: products,
  products: []
}

checkClick = (e) => {
  this.setState({
    data: e.target.value
  })
  const checked = e.target.checked;
  const value = e.target.value;
  let data;
  data = this.state.prod;
  if(checked == true && value){
    data = this.state.prod.filter(item=> item.category === e.target.value);
    console.log(data)
  }
  else{
    alert("Hi")
  }
}
  render() {
    return (
      <div className="prod-wrapper">
        <div className="select">
          <h2>Product Listing</h2>
          <div>
          <h4>Category</h4>
          
          <div><input type="checkbox" value= "Watches"  onChange= {this.checkClick}/>Watches</div>
          <div><input type="checkbox" value="Books" onChange= {this.checkClick}/>Books</div>
          <div><input type="checkbox" value="Shirts" onChange= {this.checkClick}/>Shirts</div>
         
         </div> 
         </div>
        <Container>
          <Row>
            {
           
            products.filter().map(productItem => (
             
             
              <Col key={productItem.id}>
                

                <div className="product-list" >
                  <div className="card">
                    <ul>
                      <li><img src={productItem.images} width="200px" height="200px" /></li>
                      <li>
                      Product ID: {productItem.id}</li>
                      <li>Product Name: {productItem.name}</li>
                      <li>Price: {productItem.price}</li>
                    </ul>
                    
                    <button>Add To Cart</button>
                  </div>



                </div>

             
              </Col>
            ))}
          </Row>

        </Container>
      </div>
      

    )
  }
}
export default Product;