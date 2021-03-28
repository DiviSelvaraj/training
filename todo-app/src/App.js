import React from 'react';
import Product from './Product-Listing/Product';
import './Product-Listing/Product.css';
import Todo from './Todo/Todo';
import './Todo/Todo.css';




class App extends React.Component{
render(){
  return(
    <div>
      <Product/>
      <Todo />
      
    </div>
    
   
  );
} 
}
     

export default App;
