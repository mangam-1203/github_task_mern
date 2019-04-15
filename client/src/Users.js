import React from 'react';
import Repo from './Repo';
 
export default class User extends React.Component{
    state={
        repos : [],
        visibile : false
    }
    handleRepoView=()=>{
        fetch(`https://api.github.com/users/${this.props.data.user_id}/repos`)
        .then(response=>response.json())
        .then(data =>{
                //console.log(data);
                this.setState({
                   repos      : data.map(function(repo){
                       return repo.name;
                   }) ,
                   visibile : !this.state.visibile
                })
                //console.log(repo.name);
            })
      
    }
    render(){
        return (          
                <div>
                     {this.props.visibility && 
                     <div>
                         <h1>The User Details are as follow:</h1>            
                        <img src={this.props.data.image_link}></img>
                        <h3>Name : {this.props.data.repos}</h3>
                        <button onClick={this.handleRepoView}>{!this.state.visibile ? "View Repo Names" : "Hide Repo Names" }</button>
                        <Repo visibile={this.state.visibile} repos={this.state.repos}/>                       
                        <h3>Followers : {this.props.data.followers}</h3>
                    </div>
                     }
                </div>        
            
             );
    }
}