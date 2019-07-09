import React, { Component } from 'react';
import {connect} from 'react-redux';
import getData from '../actions/userAction'
import { SUCCESS } from '../utilities/config';
class User extends Component {

    UNSAFE_componentWillMount(){
        if(this.getIdFromPath()!=='users'){
            this.props.getData(this.getIdFromPath());
        }
    }
    getIdFromPath(){
        var url = window.location.pathname;
        return url.substring(url.lastIndexOf('/') + 1);
    }
    getDeTailPath(id){
        return "/users/"+id;
    }
    getView = ()=>{
        if(this.props.user){
            let user = this.props.user;
            return (<div className="card dt-margin-bottom">
            <div className="card-header">Personal Information</div>
            <div className="card-body">
                <div className="row">
                    <label className="dt-em col-sm-4">First Name</label>
                    <div className="col-sm-8">{user.first_name}</div>
                </div>
                <div className="row">
                    <label className="dt-em col-sm-4">Last Name</label>
                    <div className="col-sm-8">{user.last_name}</div>
                </div>
            </div>
            <div className="card-footer dt-center">
                <a className="btn btn-secondary" href={this.getDeTailPath(user.id)}>More Detail>>></a>
            </div>}
        </div>)
        }else{
            let user = this.props.data;
            switch(this.props.type){
                case SUCCESS:
                    return (<div className="card dt-margin-bottom">
                    <div className="card-header">Personal Information</div>
                    <div className="card-body">
                        <div className="row">
                            <label className="dt-em col-sm-4">First Name</label>
                            <div className="col-sm-8">{user.first_name}</div>
                        </div>
                        <div className="row">
                            <label className="dt-em col-sm-4">Last Name</label>
                            <div className="col-sm-8">{user.last_name}</div>
                        </div>
                    </div>
                    <div className="card-footer dt-right">
                        <button className="btn btn-primary dt-margin-right">Edit</button>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                    </div>)
                default:
                    return <h1>{this.props.message}</h1>
            }
        }
    }
    render() {
        return this.getView();
    }
}
const mapStateToProps = state=>({
    type:state.user.type,
    data: state.user.user,
    message: state.user.type
});
export default connect(mapStateToProps,{getData})(User);