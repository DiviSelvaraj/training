import React, {Component} from 'react';

class Todo extends Component{

        state = {
          newList: '',
          list: [],
    }
    // adding list item
    addList(addVal) {
      if(addVal !== '' ){
        const newList = {
          id :  Math.random(),
          value : this.state.newList
        };
    
        const list = [...this.state.list]; 
        list.push(newList);

        this.setState({
          list,
          newList:""
        });
      }
    }
    
    // deleting an item
    
    Delete(delVal){
      const list = [...this.state.list];
      const updateList = list.filter(listItem => listItem.id !== delVal);
      console.log(updateList);
       // updating the state here
        this.setState({
          list: updateList,
        });
      
    }
    render(){
        return(
          <div className="todo-list-wrapper">
            <h2>ToDo</h2>
            <div className="todo-input">
              
            <input type="text" value= {this.state.newList} onChange = { e => {
              this.setState({
                newList: e.target.value
              })
            }}/>
            <button onClick = { () => this.addList(this.state.newList)}>TO DO</button>
            </div>
            <div className= "todo-list">
                <ul>
                        {this.state.list.map(listItem => {
                           if (listItem.value.includes(this.state.newList))
                          return(
                          console.log(listItem),
                                  <li key = {listItem.id}>{listItem.value} 
                                  <div>
                                  <button onClick = { () => this.Delete(listItem.id)}>Delete</button>
                                  </div>
                                  </li>
                        )})}
                  </ul>
            </div>
           
          </div>
          
        )
      }
}
export default Todo;