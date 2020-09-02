import React, { useState } from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import ContactFormCompleted from './ContactFormCompleted';

export default function Contact(){
    const [isFormCompleted, setIsFormCompleted] = useState(false);
    const [formData, setFormData] = useState()
    function formCompletedCB(originalFormData){
        let formData = {};
        for(let key in originalFormData){
            formData[key] = originalFormData[key].value
        }
        window.scrollTo({top: 0})
        setFormData(formData)
        setIsFormCompleted(true)
    }

    function resetForm(){
        setIsFormCompleted(false)
    }

    return (
        <section className="Contact">
            <div className="Contact-header">
                <div className="Contact-headerContainer">
                    <h3>Hello</h3>
                    <p>Got a question or suggestion?</p>
                </div>
            </div>
            <div className="Contact-formArea">
                {isFormCompleted ? (
                    <ContactFormCompleted formData={formData} resetForm={resetForm} />
                ) : (
                    <ContactForm formCompletedCB={formCompletedCB} />
                )}
            </div>
        </section>
    )
}