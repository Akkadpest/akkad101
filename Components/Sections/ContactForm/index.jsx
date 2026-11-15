"use client";
import { generateChecksum } from "@/app/utils";
import React, { useState } from "react";
const SERVICES_LIST = ["Services Cost", "Inspection", "General"];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: SERVICES_LIST[0],
    message: "",
  }),
  [formSent, setFormSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      signature: generateChecksum()
    }
    const url = 'https://gov.pestcontrol.ae/form_api/contact_us';
    // const url = 'http://localhost:8000/form_api/contact_us';
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(() => {
      setFormSent(true);
    });
  };

  return (
    <section className="container">
      <h2 className="mt-5 mb-4 text-center">Contact Us</h2>
      { formSent ? 
        <div className="alert alert-success my-4">
          Your form has been sent
        </div> :
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="services" className="form-label">
                Services
              </label>
              <select
                className="form-select"
                id="services"
                name="services"
                value={formData.services}
                onChange={handleInputChange}
              >
                {SERVICES_LIST.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message<span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      }
    </section>
  );
};

export default ContactForm;
