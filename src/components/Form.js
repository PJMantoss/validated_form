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
        this.handleCheckBox = this.handleCheckBox.bind(this); 
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
                <Input 
                    inputType = {'text'} 
                    title = {'Full Name'} 
                    name = {'name'} 
                    value = {this.state.newUser.name} 
                    placeholder = {'Type your name'} 
                    handleChange = {this.handleInput} 
                />
                <Input
                    inputType = {'number'} 
                    title = {'Age'} 
                    name = {'age'} 
                    value = {this.state.newUser.age} 
                    placeholder = {'Enter your age'} 
                    handleChange = {this.handleAge} 
                />
                <Select 
                    title = {'Gender'} 
                    name = {'gender'}
                    options = {this.state.genderOptions} 
                    value = {this.state.newUser.gender} 
                    placeholder = {'Select your gender'} 
                    handleChange = {this.handleInput} 
                />
                <CheckBox
                    title = {'Skills'} 
                    name = {'skills'}
                    options = {this.state.skillOptions} 
                    selectedOptions = {this.state.newUser.skills}  
                    handleChange = {this.handleCheckBox} 
                />
                <TextField
                    title = {'About you'} 
                    name = {'currentInfo'}
                    rows = {10} 
                    cols={50}
                    value = {this.state.newUser.about} 
                    placeholder = {'Describe your past experience and skills'} 
                    handleChange = {this.handleTextField}
                />
                <Button
                    title = {'Submit'}
                    type = {'primary'}
                    action = {this.handleFormSubmit} 
                    style = {buttonStyle}
                />
                <Button
                    title = {'Clear'}
                    type = {'secondary'}
                    action = {this.handleClearForm} 
                    style = {buttonStyle}
                />
            </form>
        )
    }
}

const buttonStyle = {
    margin : '10px 10px 10px 10px'
}

export default Form
