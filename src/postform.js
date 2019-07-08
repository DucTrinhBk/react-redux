import React, { Component } from 'react';
class PostForm extends Component {
    state = {
        title: '',
        body: ''
    }
    submit = e=>{
        e.preventDefault();
        const post = 
        {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: 
            {
                'content-type':'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
    }
    render() { 
        return ( 
        <form>
            <div className="form-group row">
                <label className="control-label col-sm-2">
                    Title
                </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" value={this.state.title} onChange={e=>
                    {
                        this.setState({title: e.target.value})
                    }}/>
                </div>
            </div>
            <div className="form-group row">
                <label className="control-label col-sm-2">
                    Body
                </label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" value={this.state.body} onChange={e=>
                    {
                        this.setState({body: e.target.value})
                    }}/>
                </div>
            </div>
            <button type="submit" className="btn btn-secondary" onClick={this.submit}>Submit</button>
        </form> );
    }
}
 
export default PostForm;