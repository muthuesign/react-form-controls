import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div className="form-group">
                <label className="form-label" for={this.props.name}>{this.props.title}</label>
                <input 
                    id={this.props.name}
                    name={this.props.name}
                    type={this.props.type}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleChange}></input>
            </div>
        );
    }
}

export default Input;