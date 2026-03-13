import React, { useState } from "react";
import './style.css';
import { Button, Form, Spinner} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import 'react-phone-number-input/style.css';
import PhoneInput, {isPossiblePhoneNumber} from "react-phone-number-input";
import axios from "axios";

function ContactForm(){
    const [formerrors, setFormErrors] = useState({});
    const [formSuccess, setFormSuccess] = useState();
    const [formWarning, setFormWarning] = useState();
    const [phoneValue, setPhoneValue] = useState();
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        yourName: "",
        emailAddress: "",
        yourMessage: ""
    });

    const handleChange = (event) => {
        setValues((values) => ({
          ...values,
          [event.target.name]: event.target.value,
        }));
    };

    const validate = () => {
    
        let errors = {};
    
        //name field
        if (!values.yourName) {
          errors.yourName = "Name is required";
        }
    
        //email field
        if (!values.emailAddress) {
          errors.emailAddress = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
          errors.emailAddress = "Email address is invalid";
        }

        //Phone number field
        if (!phoneValue) {
            errors.phoneValue = "Phone number is required";
        } else if (isPossiblePhoneNumber(phoneValue) === false) {
            errors.phoneValue = "Phone number is invalid";
        }
    
        setFormErrors(errors);
    
        if (Object.keys(errors).length === 0) {
          return true;
        } else {
          return false;
        }
    };

    const resetForm = () =>{
        setValues({
            yourName: "",
            emailAddress: "",
            yourMessage: ""
        });
        setPhoneValue('');
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if (validate(values)) {
            setLoading(true);
            axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}/api/contact-email-api.php`,
                data: JSON.stringify({
                        yourName: values.yourName,
                        emailAddress: values.emailAddress,
                        phoneValue: phoneValue,
                        yourMessage: values.yourMessage
                    }),
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            })
            .then(function (response) {
                //handle success
                if (response.data.status === 0) {
                    setLoading(false);
                    setFormSuccess("Your message was sent successfully");
                    resetForm();
                    setTimeout(() => {
                        setFormSuccess('');
                    }, 5000);
                } else {
                    setLoading(false);
                    setFormWarning("Some error occured");
                    resetForm();
                    setTimeout(() => {
                        setFormWarning('');
                    }, 5000);
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response);
                setLoading(false);
                setFormWarning("Some error occured");
                resetForm();
                setTimeout(() => {
                    setFormWarning('');
                }, 5000);
            });
        }
    };
    return(
        <>
            <div className="contact-form">
                <Form className="contactForm" id="contactForm" onSubmit={handleSubmit}>
                    <Form.Group controlId="yourName" className="form-group">
                        {/* <Form.Label>Name</Form.Label> */}
                        <Form.Control type="text" placeholder="Name" value={values.yourName} name="yourName" onChange={handleChange}  />
                        {formerrors.yourName && (
                            <p className="text-danger">{formerrors.yourName}</p>
                        )}
                    </Form.Group>
                    <Form.Group controlId="emailAddress" className="form-group">
                        <Form.Control type="text" placeholder="Email Address" value={values.emailAddress} name="emailAddress" onChange={handleChange} />
                        {formerrors.emailAddress && (
                            <p className="text-danger">{formerrors.emailAddress}</p>
                        )}
                    </Form.Group>
                    <Form.Group controlId="phoneValue" className="form-group">
                        <PhoneInput 
                            id="phoneValue"
                            name="phoneValue"
                            placeholder="Phone Number" 
                            international 
                            defaultCountry="IN" 
                            value={phoneValue} 
                            onChange={setPhoneValue}
                             className="form-control"
                        />

                        {formerrors.phoneValue && (
                            <p className="text-danger">{formerrors.phoneValue}</p>
                        )}
                    </Form.Group>
                    <Form.Group controlId="yourMessage" className="form-group">
                        <Form.Control as="textarea" rows={4} name="yourMessage" placeholder="Message or Questions" value={values.yourMessage} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="form-group form-submit-group">
                        <Button type="submit" className={`form-submit-btn btn btn-blue-border ${loading ? 'disabled' : null }`}> 
                        {
                            loading ?
                            <>
                                Sending 
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                            </>
                            : 
                            <>
                                Send
                                <FontAwesomeIcon icon={faChevronRight} /> 
                            </>
                        }
                        </Button>
                        <div className="message">{formSuccess ? <p className="text-success">{formSuccess}</p> : null}{formWarning ? <p className="text-danger">{formWarning}</p> : null}</div>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}
export default ContactForm;