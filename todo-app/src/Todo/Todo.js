import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
          newList: '',
          list: [],
          search: ''
    
        }
      }
    
    inputChange(val){
      this.setState({
        newList: val,
      })
    }
    
    // adding list item
    addList(addVal) {
      if(addVal !== '' ){
        const newList = {
          id :  Math.random(),
          value : this.state.newList
        };
    
        const list = [...this.state.list]; // spread operator used here for spliting the items
        // console.log(list);
        list.push(newList);// we are adding the new items to an array
        // console.log(list);
    
        // reseting the state here
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
            <div className="todo-input">
            <input type="text" value= {this.state.newList} onChange = { e => this.inputChange(e.target.value)}/>
            <button onClick = { () => this.addList(this.state.newList)}>TO DO</button>
            </div>
            <div className= "todo-list">
                <ul>
                        {this.state.list.map(listItem => {return(
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