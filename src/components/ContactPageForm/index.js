import React, { useState } from "react";
import './style.css';
import { Button, Form, Spinner} from "react-bootstrap";
import 'react-phone-number-input/style.css';
import PhoneInput, {isPossiblePhoneNumber} from "react-phone-number-input";
import axios from "axios";

function ContactPageForm(){
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
    const isEmpty = (val) => !val || val.trim() === "";
    // name field
    if (!values.yourName || values.yourName.trim() === "") {
        errors.yourName = "Name is required";
    }

    // email field
    if (!values.emailAddress || values.emailAddress.trim() === "") {
        errors.emailAddress = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.emailAddress.trim())) {
        errors.emailAddress = "Email address is invalid";
    }

    // Phone number field
    if (!phoneValue || phoneValue.trim() === "") {
        errors.phoneValue = "Phone number is required";
    } else if (isPossiblePhoneNumber(phoneValue) === false) {
        errors.phoneValue = "Phone number is invalid";
    }
    if (isEmpty(values.yourMessage)) {
        errors.yourMessage = "Message is required";
    } else if (values.yourMessage.trim().length < 10) {
        errors.yourMessage = "Message must be at least 10 characters";
    }
    setFormErrors(errors);

    return Object.keys(errors).length === 0;
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
            <div className="contact-page-form">
                <Form className="contactpageForm" id="contactpageForm" onSubmit={handleSubmit}>
                    <Form.Group controlId="yourName" className="form-group">
                        <Form.Control type="text" placeholder="Name" value={values.yourName} name="yourName" onChange={handleChange}  />
                        <p className={`text-danger ${formerrors.yourName && "visible"}`}>{formerrors.yourName ? formerrors.yourName : "First Name is required"}</p>
                    </Form.Group>

                    <Form.Group controlId="emailAddress" className="form-group">
                        <Form.Control type="text" placeholder="Email" value={values.emailAddress} name="emailAddress" onChange={handleChange} />
                        <p className={`text-danger ${formerrors.emailAddress && "visible"}`}>{formerrors.emailAddress ? formerrors.emailAddress : "Email is required"}</p>
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

                        <p className={`text-danger ${formerrors.phoneValue && "visible"}`}>{formerrors.phoneValue ? formerrors.phoneValue : "Phone Number is required"}</p>
                    </Form.Group>

               <Form.Group controlId="yourMessage" className="form-group">
                <Form.Control
                    as="textarea"
                    rows={4}
                    name="yourMessage"
                    placeholder="Message"
                    value={values.yourMessage}
                    onChange={handleChange}
                />
                <p className={`text-danger ${formerrors.yourMessage && "visible"}`}>
                    {formerrors.yourMessage ? formerrors.yourMessage : "Message is required"}
                </p>
            </Form.Group>

                    <Form.Group className="form-group form-submit-group">
                        <Button type="submit" className={`form-submit-btn ${loading ? 'disabled' : null }`}> 
                        {
                            loading ?
                            <>
                                Sending 
                                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                            </>
                            : 
                            <>
                                Send Enquiry
                            </>
                        }
                        </Button>
                        <div className="message">{formSuccess ? <p className="text-success">{formSuccess}</p> : null}{formWarning ? <p className="text-danger visible">{formWarning}</p> : null}</div>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}
export default ContactPageForm;