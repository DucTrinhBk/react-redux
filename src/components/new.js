import React, { Component } from 'react';
class New extends Component {
    render() { 
        return ( 
        <div className="container dt-margin jumbotron">
            <EditTextForm type="text" label="First Name" value=""/>
            <EditTextForm type="text" label="Last Name" value=""/>
            <EditTextForm type="email" label="Email" value=""/>
            <DropDownForm label="Gender" opts={[{value: 1,name: "male"},{value: 2,name: "female"}] } current = {1} />
            <Submit submit = {()=>{console.log("submit now")}}/>
        </div> );
    }
}
class EditTextForm extends Component {
    render() { 
        return ( 
        <div className="form-group row">
            <label className="control-label col-sm-3">{this.props.label}</label>
            <div className="col-sm-9">
                <input type={this.props.type} className="form-control" value={this.props.value}/>
            </div>
        </div> );
    }
}
class DropDownForm extends Component {
    render() { 
        return ( 
    <div className="form-group row">
        <label className="control-label col-sm-3">{this.props.label}</label>
        <div className="col-sm-9">
            <select className="form-control" value={this.props.current} onChange={this.props.handleChange}>
                {this.props.opts.map(opt=>
                    (<option value={opt.id}>{opt.name}</option>))}
            </select>
        </div>
    </div> );
    }
}
class Submit extends Component {
    render() { 
        return ( <button className="btn btn-primary" onClick={this.props.submit}>Submit</button> );
    }
}
 
export default New;