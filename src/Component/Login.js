import React from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {LoginAction} from '../Action/LoginAction';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    handleusername=(e)=>{
        this.setState({
            username:e.target.value          
        })
    }
    handlepassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        const {username,password}=this.state;
        const {name,pass}=this.props;

       if(username!==name && password!==pass)
       {
             alert('Invalid Email and password')
       }
        else {

        this.props.LoginAction();
        this.props.history.push('/dashboard')

       }
       
    }
   
    render(){
        return(
            <form onSubmit={this.handleSubmit} className='login'>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleusername}/><br/>
                <label>Password</label>
                <input type="text" value={this.state.password} onChange={this.handlepassword}/><br/><br/>
                <button>Login</button>
                      
            </form>
        )
    }
}
function mapStateToProps(state){
    return{
        name:state.login.username,
        pass:state.login.pass
    }
}
export default connect(mapStateToProps,{LoginAction})(Login);
