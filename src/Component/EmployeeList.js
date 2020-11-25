import React from 'react';
import {connect} from 'react-redux';
import {EmployeeListAction} from '../Action/EmployeeListAction';
import '../App.css';

class EmployeeList extends React.Component{
    componentDidMount=()=>{
        this.props.EmployeeListAction();
    }
    render(){
        const data=this.props.userList.map(user=>{
          return(  <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
            </tr>)}
        )
        return(
            <div>
                <br/>
                <h2>Employee Details</h2><br/><br/><br/>
                <table className='table'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone No</th>
                    </tr>
                    {data}
                </table>
           </div>
        )
    }
}
function mapStateToProps(state){
    return{
        userList:state.emp.user
    };
}
export default connect(mapStateToProps,{EmployeeListAction})(EmployeeList);
