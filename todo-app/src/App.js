import React from 'react';
import './App.css';
import Product from './Product-Listing/Product';
import './Product-Listing/Product.css';
import Todo from './Todo/Todo';


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
