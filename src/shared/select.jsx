import React, { Component } from 'react';

class Select extends Component {
    render() {
        return (
            <div className="form-group">
                <label className="form-label" for={this.props.name}>{this.props.title}</label>
                <select 
                    id={this.props.name}
                    name={this.props.name}
                    onChange={this.props.handleChange}>
                        {
                            this.props.options.map(opt => (
                               <option value={opt} selected={this.props.options.indexOf(opt) > -1}>{opt}</option>
                        ))} 
                    </select>
            </div>
        );
    }
}

export default Select;