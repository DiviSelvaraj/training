import React, {Component} from 'react';

const products  = [
    {
      id: 1,
      name: 'TeamSpirit',
      images: './images/item1.jpg',
      category: 'TShirts',
      price: 500
    },
    {
      id: 2,
      name: 'Dream It',
      images: './images/item2.png',
      category: 'Books',
      price: 400,
    },
    {
        id: 3,
        name: 'Dream It',
        images: './images/item3.jpg',
        category: 'Watch',
        price: 300,
    },
    
];
class Product extends Component{

    render(){
        return(
            <div className="product-list">
               
                {products.filter(product => product.id).map(filteredProduct => (
                <div className="card">
                  
                  <p><img src= {filteredProduct.images} width="200px" height="200px"/></p>
                  <p>{filteredProduct.id}</p>
                   <p>{filteredProduct.name}</p>
                   <button>Add To Cart</button>
                </div>
                
              ))}
               
            </div>
        )
    }
}
export default Product;