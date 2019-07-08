import React, { Component } from 'react';
import User from './user';
import {connect} from 'react-redux';
import getDatas from '../actions/usersAction';
class Users extends Component {
    UNSAFE_componentWillMount(){
        this.props.getDatas();
    }
    render() { 
        return ( 
        <div className="jumbotron container">
            {this.props.data.map(user =>(<User key={user.id} isList={true} user = {user}/>))}
        </div> );
    }
}
 const mapStateToProps = state =>{
    return ({
        data: state.users.users
    });
 }
export default connect(mapStateToProps,{getDatas})(Users);