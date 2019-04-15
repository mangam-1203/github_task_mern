import React, { Component } from 'react';
import './App.css';
import User from './Users';


export default class App extends Component {

  state={
    users : {},
    visibility : false
  }

  handleForm=(e)=>{
    e.preventDefault();
    const name=this.refs.name.value;

    this.refs.name.value="";
   // visibility  =  true;
    fetch('/form',{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        userid : name
      })
    })
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      this.setState({
        visibility : !this.state.visibility,
        users : {
          user_id    : name,
          followers  : data.followers,
          image_link : data.avatar,
          repos      : data.name
        }
      });
      //console.log(this.state.users);
    });
  }
  render() {
    return (
      <div className="App">
       <form id="showData" onSubmit={this.handleForm} >
         <input type="text" placeholder="Enter your github userid" ref="name"></input>
         <button  >Show Data</button>
       </form>
       <User data={this.state.users} visibility={this.state.visibility}></User>

      </div>
    );
  }
}

//export default App;
