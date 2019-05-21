import React, { Component } from 'react';
import Input from './shared/input.jsx';
import CheckBox from './shared/checkbox.jsx';
import Select from './shared/select.jsx';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newEmp: {
                name: '',
                age: '',
                gender: '',
                expertise: []
            },

            genderOptions: ['Male', 'Female'],
            skills: ['.Net', 'angular', 'react']
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        //do api call
    }

    handleInput(e) {
        let trg = e.target;
        this.setState((prvState) => {
            return {
                newEmp: {
                    ...prvState.newEmp, [trg.name]: trg.value
                }
            }
        }, () => console.log(this.state.newEmp))
    }

    handleSkills(e) {
        let trg = e.target;
        let newSelections = [];
        if (this.state.skills.indexOf(trg.value) > -1 && this.state.newEmp.expertise.indexOf(trg.value) === -1) {
            newSelections = [...this.state.newEmp.expertise, trg.value];
        } else {
            newSelections = this.state.newEmp.expertise.filter(s => s !== trg.value);
        }

        this.setState((prvState) => {
            return {
                newEmp: {
                    ...prvState.newEmp, expertise: newSelections
                }
            }
        }, () => console.log(this.state.newEmp))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Input
                    title={'Enter your name'}
                    type={'text'}
                    name={'name'}
                    placeholder="Enter your name"
                    handleChange={this.handleInput.bind(this)}></Input>
                <Input
                    title={'Enter your age'}
                    type={'text'}
                    name={'age'}
                    placeholder="Enter your age"
                    handleChange={this.handleInput.bind(this)}></Input>
                <Select
                    title={'Enter your Gender'}
                    name={'gender'}
                    options={this.state.genderOptions}
                    handleChange={this.handleInput.bind(this)}></Select>
                <CheckBox
                    title={'Select your skils'}
                    name={'expertise'}
                    options={this.state.skills}
                    selOptions={this.state.newEmp.expertise}
                    handleChange={this.handleSkills.bind(this)}></CheckBox>
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </form>
        );
    }
}

export default FormContainer;