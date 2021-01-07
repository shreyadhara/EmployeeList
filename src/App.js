import React from 'react';
import Login from './Component/Login';
import EmployeeList from './Component/EmployeeList';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    <div >
      <Switch>
   <Route path='/' exact component={Login}/>
   <Route path='/dashboard' component={EmployeeList}/>
   </Switch>
    </div>
    </BrowserRouter>
  )
}
}
export default App;
