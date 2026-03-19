import React, { useState } from "react";
import './style.css';
import { Button, Form, Spinner, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import 'react-phone-number-input/style.css';
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import axios from "axios";

function CareerForm() {

    const [formerrors, setFormErrors] = useState({});
    const [formSuccess, setFormSuccess] = useState();
    const [formWarning, setFormWarning] = useState();
    const [phoneValue, setPhoneValue] = useState();
    const [loading, setLoading] = useState(false);

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        location: "",
        applyingFor: "",
        resume: null
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        if (name === "resume") {
            setValues({ ...values, resume: files[0] });
        } else {
            setValues({ ...values, [name]: value });
        }
    };

    const validate = () => {

        let errors = {};

        if (!values.firstName) {
            errors.firstName = "First name is required";
        }

        if (!values.lastName) {
            errors.lastName = "Last name is required";
        }

        if (!values.emailAddress) {
            errors.emailAddress = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(values.emailAddress)) {
            errors.emailAddress = "Email address is invalid";
        }

        if (!phoneValue) {
            errors.phoneValue = "Phone number is required";
        } else if (!isPossiblePhoneNumber(phoneValue)) {
            errors.phoneValue = "Phone number is invalid";
        }

        if (!values.location) {
            errors.location = "Location is required";
        }

        if (!values.applyingFor) {
            errors.applyingFor = "Please select position";
        }

        if (!values.resume) {
            errors.resume = "Resume is required";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const resetForm = () => {
        setValues({
            firstName: "",
            lastName: "",
            emailAddress: "",
            location: "",
            applyingFor: "",
            resume: null
        });
        setPhoneValue('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) {

            setLoading(true);

            const formData = new FormData();
            formData.append("firstName", values.firstName);
            formData.append("lastName", values.lastName);
            formData.append("emailAddress", values.emailAddress);
            formData.append("phoneValue", phoneValue);
            formData.append("location", values.location);
            formData.append("applyingFor", values.applyingFor);
            formData.append("resume", values.resume);

            axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}/api/career-email-api.php`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(function (response) {
                setLoading(false);
                if (response.data.status === 0) {
                    setFormSuccess("Application submitted successfully");
                    resetForm();
                } else {
                    setFormWarning("Some error occurred");
                }

                setTimeout(() => {
                    setFormSuccess('');
                    setFormWarning('');
                }, 5000);
            })
            .catch(function () {
                setLoading(false);
                setFormWarning("Some error occurred");
                setTimeout(() => {
                    setFormWarning('');
                }, 5000);
            });
        }
    };

    return (
        <div className="career-form-wrapper">

   <h3>Ready to Start?</h3>
   <p>Fill Out The form below and our HR Team will get back to you Shortly.</p>
            <Form onSubmit={handleSubmit}>

                <Row>
                    <Col md={6}>
                        <Form.Group className="form-group">
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                            />
                            {formerrors.firstName && <p className="text-danger">{formerrors.firstName}</p>}
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="form-group">
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                            />
                            {formerrors.lastName && <p className="text-danger">{formerrors.lastName}</p>}
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="form-group">
                    <Form.Control
                        type="text"
                        placeholder="Email Address"
                        name="emailAddress"
                        value={values.emailAddress}
                        onChange={handleChange}
                    />
                    {formerrors.emailAddress && <p className="text-danger">{formerrors.emailAddress}</p>}
                </Form.Group>

                <Form.Group className="form-group">
                    <PhoneInput
                        international
                        defaultCountry="IN"
                        value={phoneValue}
                        onChange={setPhoneValue}
                        placeholder="Phone Number"
                        className="form-control"
                    />
                    {formerrors.phoneValue && <p className="text-danger">{formerrors.phoneValue}</p>}
                </Form.Group>
                <p className="FontSiz18 bold">Applying For</p>

                <Form.Group className="form-group">
                    <Form.Control
                        type="text"
                        kjplaceholder="Location"
                        name="location"
                        value={values.location}
                        onChange={handleChange}
                    />
                    {formerrors.location && <p className="text-danger">{formerrors.location}</p>}
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Select
                        name="applyingFor"
                        value={values.applyingFor}
                        onChange={handleChange}>
                        <option value="">Applying For</option>
                        <option value="Web Designer">Web Designer</option>
                        <option value="Graphic Designer">Graphic Designer</option>
                        <option value="Digital Marketer">Digital Marketer</option>
                    </Form.Select>
                    {formerrors.applyingFor && <p className="text-danger">{formerrors.applyingFor}</p>}
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Control
                        type="file"
                        name="resume"
                        onChange={handleChange}
                    />
                    {formerrors.resume && <p className="text-danger">{formerrors.resume}</p>}
                </Form.Group>

                <Form.Group className="form-group form-submit-group">
                    <Button type="submit" className={`form-submit-btn ${loading ? 'disabled' : ''}`}>
                        {
                            loading ?
                                <>Submitting <Spinner as="span" animation="border" size="sm" /></>
                                :
                                <>Submit <FontAwesomeIcon icon={faChevronRight} /></>
                        }
                    </Button>

                    <div className="message">
                        {formSuccess && <p className="text-success">{formSuccess}</p>}
                        {formWarning && <p className="text-danger">{formWarning}</p>}
                    </div>
                </Form.Group>

            </Form>
        </div>
    );
}

export default CareerForm;