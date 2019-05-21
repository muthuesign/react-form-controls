import React, { Component } from 'react';

class CheckBox extends Component {
    render() {
        return (
            <div className="form-group">
                { 
                    this.props.options.map(opt => {
                        return (
                            <label className="form-label" for={this.props.name}>
                                <input 
                                    id={this.props.name}
                                    name={this.props.name}
                                    type={'checkbox'}
                                    value={opt}
                                    checked={this.props.selOptions.indexOf(opt) > -1}
                                    onChange={this.props.handleChange}></input> {this.props.title}
                            </label>
                        )
                    })
                } 
            </div>
        );
    }
}

export default CheckBox;