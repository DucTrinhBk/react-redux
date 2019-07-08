import React, { Component } from 'react';
import {connect} from 'react-redux';
import getData from '../actions/userAction'
class User extends Component {
    UNSAFE_componentWillMount(){
        if(!this.props.isList){
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
    render() {
        console.log(this.props.user);
        return (this.props.user === null) ? (<h1>Not Found this user </h1>):( 
        <div className="card dt-margin-bottom">
            <div className="card-header">Personal Information</div>
            <div className="card-body">
                <div className="row">
                    <label className="dt-em col-sm-4">First Name</label>
                    <div className="col-sm-8">{this.props.user.first_name}</div>
                </div>
                <div className="row">
                    <label className="dt-em col-sm-4">Last Name</label>
                    <div className="col-sm-8">{this.props.user.last_name}</div>
                </div>
            </div>
            {this.props.isList?(<div className="card-footer dt-center">
                <a className="btn btn-secondary" href={this.getDeTailPath(this.props.user.id)}>More Detail>>></a>
            </div>):(
                <div className="card-footer dt-right">
                <button className="btn btn-primary dt-margin-right">Edit</button>
                <button className="btn btn-primary">Delete</button>
            </div>)}
        </div> );
    }
}
const mapStateToProps = state=>({
    user: state.user.user
});
export default connect(mapStateToProps,{getData})(User);