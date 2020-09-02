import React, { useReducer } from 'react';
import './ContactForm.css';
import CustomSelect from '../Common/CustomSelect';
import PropTypes from 'prop-types';
import axios from 'axios';

ContactForm.propTypes = {
    formCompletedCB: PropTypes.func.isRequired
}

function toCapitalize(str){
    return str.split('')[0].toUpperCase() + str.split('').splice(1).join('');
}

const date = new Date(Date.now());

function contactReducer(state, action){
    switch(action.type){
        case 'field': {
            if(action.field === 'copy_recipient'){
                return {...state, formData: { ...state.formData, 'copy_recipient': { value: !['copy_recipient'], valid: true }}}
            } else {
                return {...state, formData: { ...state.formData, [action.field]: { value: action.payload, valid: state.formData[action.field].valid }}}
            }
        }
        case 'custom_select': {
            return { ...state, formData: { ...state.formData, 'subject': { value: action.payload, valid: true }}}
        }
        case 'validate': {
            let tempInputState = {...state.formData}

            for(let key in tempInputState){
                if((key === 'firstname' || key === 'lastname' || key === 'message')){
                    if(tempInputState[key].value.length > 0){
                        tempInputState[key].valid = true; 
                        tempInputState[key].value = toCapitalize(tempInputState[key].value) 
                    } else {
                        tempInputState[key].valid = false;
                    }
                } else if(key === 'email'){
                    if(/\S+@\S+\.\S+/.test(tempInputState[key].value)){
                        tempInputState[key].valid = true;
                    } else {
                        tempInputState[key].valid = false;
                    }
                } else if(key === 'phone'){
                    if(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(tempInputState[key].value)){
                        tempInputState[key].valid = true;
                    } else {
                        tempInputState[key].valid = false;
                    }
                }
            }
            return { ...state, formData: { ...tempInputState }}
        }
        case 'submitClick': {
            return { ...state, submitClicked: action.payload }
        }
        default: return state;
    }
}

const initState = {
    formData: {
        firstname: {
            value: "",
            valid: false
        },
        lastname: {
            value: "",
            valid: false
        },
        email: {
            value: "",
            valid: false
        },
        phone: {
            value: "",
            valid: false
        },
        subject: {
            value: "",
            valid: true
        },
        message: {
            value: "",
            valid: false
        },
        date: {
            value: date.toString(),
            valid: true
        },
        copy_recipient: {
            value: false,
            valid: true
        }
    },
    submitClicked: false
}

export default function ContactForm(props){
    const { formCompletedCB } = props;
    let [state, dispatch] = useReducer(contactReducer, initState)
    let { firstname, lastname, email, subject, phone, message } = state.formData;

    function handleChange(e){
        dispatch({ type: 'field', field: e.target.name, payload: e.target.value })
    }

    async function handleSubmissionClick(e){
        e.preventDefault();
        await dispatch({ type: 'validate' })
        await dispatch({ type: 'submitClick', payload: true })
        let inputStateAsArr = [];
        for(let key in state.formData){
            inputStateAsArr.push(state.formData[key])
        }

        if(inputStateAsArr.every(input => input.valid)){
            let options = { headers: { 'Content-Type': 'application/json' } }
            try {
                let resp = await axios.post('https://charredfoodserver.herokuapp.com/charredapi/contact-submit', state.formData, options);
                formCompletedCB(resp.data)
            } catch (error) {   
                console.log('Error: ' + error)
            }
        }
    }

    return (
        <form className="ContactForm">
            <div className="ContactForm-iconContainer">
                <i className="ContactForm-icon fas fa-envelope-open-text"></i>
            </div>
            <div className="ContactForm-inputWrapper ContactForm-inputWrapper--2col">
                <div className="ContactForm-inputWrapper">
                    <label htmlFor="firstname">First Name:</label>
                    <input 
                        type="text" 
                        name="firstname" 
                        onChange={ handleChange } 
                        className={ !state.formData.firstname.valid && state.submitClicked ? 'ContactForm-input--invalid' : null }
                        value={ firstname.value }
                    />
                </div>
                <div className="ContactForm-inputWrapper">
                    <label htmlFor="lastname">Last Name:</label>
                    <input 
                        type="text" 
                        name="lastname" 
                        onChange={ handleChange} 
                        className={ !state.formData.lastname.valid && state.submitClicked ? 'ContactForm-input--invalid' : null }
                        value={ lastname.value } 
                    />
                </div>
            </div>
            <div className="ContactForm-inputWrapper">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={ handleChange}  
                    className={ !state.formData.email.valid && state.submitClicked ? 'ContactForm-input--invalid' : null }
                    placeholder="E.g: johndoe@website.com" 
                    value={ email.value }
                />
            </div>
            <div className="ContactForm-inputWrapper">
                <label htmlFor="phone">Phone Number:</label>
                <input 
                    type="text" 
                    name="phone"
                    style={{ textTransform: 'none' }} //Chrome fix as textTransform: capitalize affects any character that occurs after a period
                    onChange={ handleChange} 
                    className={ !state.formData.phone.valid && state.submitClicked ? 'ContactForm-input--invalid' : null }
                    placeholder="E.g: (123) 456-7890" 
                    value={ phone.value }
                />
            </div>
            <div className="ContactForm-inputWrapper--customSelect">
                <CustomSelect
                    getVal={ val => dispatch({ type: 'custom_select', payload: val }) } 
                    options={['Suggestion', 'Review', 'Concern', 'Marketing', 'Private Events', 'Employment', 'Other']} 
                    />
                <input type="hidden" name="subject" value={ subject.value } />
            </div>
            <div className="ContactForm-inputWrapper">
                <label>Message:</label>
                <textarea 
                    name="message" 
                    maxLength="1000" 
                    rows="10" 
                    onChange={ handleChange } 
                    className={ !state.formData.message.valid && state.submitClicked ? 'ContactForm-input--invalid' : null }
                    value={ message.value }
                ></textarea>
                
            </div>
            <div className="ContactForm-inputWrapper ContactForm-inputWrapper--checkbox">
                <input onClick={ handleChange } type="checkbox" id="checkbox" name="copy_recipient" />
                <label htmlFor="checkbox">Send me a copy of this email</label>
            </div>
            <button className="ContactForm-submit" onClick={ handleSubmissionClick } >
                <i className="ContactForm-submitIcon fas fa-envelope"></i>
                <p>Submit</p>
            </button>
        </form>
    )
}