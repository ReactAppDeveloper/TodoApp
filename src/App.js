import React,{Component}from 'react';
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export default class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:"",
    editItem:false
  };
  handlechange = (e)=>{

    this.setState({
      item:e.target.value
    });
  };
  handlesubmit= (e)=>{

    e.preventDefault();
     const newItem = {
       id:this.state.id,
       title :this.state.item
     };
  
     const updateItem = [...this.state.items,newItem];

     this.setState({
       items:updateItem,
       item:"",
       id:uuid(),
       editItem:false
     });
   
  };
  clearList=()=>{
    this.setState({
      items:[]
    })
  }
  handledelete=(id)=>{
    const filteredItems = this.state.items.filter(item =>
      item.id !== id)
      this.setState({
        items:filteredItems
      })
  }
  handleedit=(id)=>{
    const filteredItems = this.state.items.filter(item =>
      item.id !== id)

      const selectedItem = this.state.items.find(item=>item.id===id);
      console.log(selectedItem)

      this.setState({
        items:filteredItems,
        item:selectedItem.title,
        editItem:true,
        id:id
      })
  }
  render()
  {
  return (
    <div className ="container">
      <div className="row">
        <div className = "col-10 mx-auto col-md-8 mt-4">
          <h3 className= "text-capitalize text-center">
            Todo input
          </h3>
      
      <TodoInput 
      item={this.state.item} 
      handlechange={this.handlechange}
      handlesubmit={this.handlesubmit}
      editItem={this.state.editItem}
      />
      <TodoList 
      items={this.state.items} 
      clearList={this.clearList}
      handledelete = {this.handledelete}
      handleedit = {this.handleedit}
      />
    
    </div>
    </div>
    </div>

  );
  }
}