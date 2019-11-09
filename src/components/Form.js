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
    }


    render() {
        return (
            <form>
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
