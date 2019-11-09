import React, { Component } from 'react'

import Input from './Input';
import CheckBox from './CheckBox';
import Select from './Select';
import TextField from './TextField';
import Button from './Button';

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            newUser: {
                name: '',
                age: '',
                gender: '',
                skills: [],
                about: ''
            },
            genderOptions: ['Male', 'Female', 'Others'],
            skillOptions: ['Programming', 'Development', 'Design', 'Testing']
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleTextField = this.handleTextField.bind(this);
    }

    handleFullName(e){
        let value = e.target.value;
        this.setState(prevState => ({
            newUser: {
            ...prevState.newUser, name: value
        }}), () => console.log(this.state.newUser))
    }

    handleAge(e){
        let value = e.target.value;
        this.setState(prevState => ({
            newUser: {
            ...prevState.newUser, age: value
        }}), () => console.log(this.state.newUser))
    }

    handleInput(e){
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prevState => ({
            newUser: {
            ...prevState.newUser, [name]: value
        }}), () => console.log(this.state.newUser))
    }

    handleTextField(e){
        console.log("Inside handleTextField");
        let value = e.target.value;
        this.setState(prevState => ({
            newUser: {
            ...prevState.newUser, about: value
        }}), () => console.log(this.state.newUser))
    }

    handleCheckBox(e){
        const newSelection = e.target.value;
        let newSelectionArray;

        if(this.state.newUser.skills.indexOf(newSelection) > -1){
            newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
        }else{
            newSelectionArray = [...this.state.newUser.skills, newSelection];
        }

        this.setState(prevState => ({
            newUser: {
                ...prevState.newUser, skills: newSelectionArray
            }
        }))
    }

    handleFormSubmit(e){
        e.preventDefault();
        let userData = this.state.newUser;

        fetch('http://example.com', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            })
        })
    }

    handleClearForm(e){
        e.preventDefault();
        this.setState({
            newUser: {
                name: '',
                age: '',
                gender: '',
                skills: [],
                about: ''
            }
        })
    }


    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
                <Input />
                <Input />
                <Select />
                <CheckBox />
                <TextField />
                <Button />
                <Button />
            </form>
        )
    }
}

export default Form
