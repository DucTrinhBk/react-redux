import React, { Component } from 'react';
import User from './user';
import {connect} from 'react-redux';
import getDatas from '../actions/usersAction';
import { SUCCESS,ERROR,NO_RESULT } from '../utilities/config';
class Users extends Component {
    UNSAFE_componentWillMount(){
        this.props.getDatas();
    }
    getView = ()=>{
        switch(this.props.type){
            case SUCCESS:
                    return ( 
                        <div className="jumbotron container">
                            {this.props.data.map(user =>(<User key={user.id} user = {user}/>))}
                        </div> )
            default:
                return <h1>{this.props.message}</h1>
        }
    }
    render() { 
        return this.getView();
    }
}
 const mapStateToProps = state =>{
    return ({
        type: state.users.type,
        data: state.users.data,
        message: state.users.message
    });
 }
export default connect(mapStateToProps,{getDatas})(Users);