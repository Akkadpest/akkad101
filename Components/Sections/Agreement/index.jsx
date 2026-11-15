"use client";
import { generateChecksum } from "@/app/utils";
import React, { useEffect, useState } from "react";
import Loader from "../CustomerArea/Loader";


const API_ROOT = 'https://gov.pestcontrol.ae';
// const API_ROOT = 'http://localhost:8000';

const PaymentFailed = () => (
  <>
    <h2 className="text-center mb-4">
      Your payment has been failed or order not found
    </h2>
    <div className="text-center">
      Please try again later
    </div>
  </>
)

const ValidationLoading = () => (
  <>
    <h2 className="text-center mb-4">
      Validating your payment
    </h2>
    <div className="d-flex justify-content-center">
      <Loader />
    </div>
  </>
)

const AllDone = () => (
  <div className="container mt-5 col-md-6">
    <h2 className="text-center mb-4">
      Digital contract will be sent to you via email
    </h2>
  </div>
)

const AdditionalOrderDetails = ({ orderId }) => {
  const [formData, setFormData] = useState({
    location: '',
    contact_person: ''
  }),
  [formSent, setFormSent] = useState(false),
  [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveForm = (ev) => {
    ev.preventDefault();
    setLoading(true)
    const data = {
      ...formData,
      order_id: orderId,
      signature: generateChecksum()
    }
    const url = `${API_ROOT}/form_api/annual_contract_details`;
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
  }

  if (formSent) {
    return <AllDone />;  
  }

  return (
    <div className="container mt-5 col-md-6">
      <h2 className="text-center mb-4">
        Please specify the delivery address
      </h2>
      { loading ? 
        <div className="d-flex justify-content-center">
          <Loader/>
        </div> :
        <form onSubmit={ saveForm }>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location, Address
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="Enter Adress"
              required
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact_person" className="form-label">
              Contact person
            </label>
            <input
              type="text"
              className="form-control"
              id="contact_person"
              placeholder="Contact person"
              required
              name="contact_person"
              value={formData.contact_person}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      }
    </div>
  )
}

const Agreement  = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    license_number: '',
    tax_invoice_number: '',
    telephone_number: '',
    state: '',
    location: '',
    treated_area: '',
    starting_date: '',
    end_date: '',
    number_of_visits: '',
    trade_license: ''
  }),
  [formSent, setFormSent] = useState(false),
  [paymentValidation, setPaymentValidation] = useState(false),
  [validationLoading, setValidationLoading] = useState(false),
  [paymenDone, setPaymentDone] = useState(false),
  [paymentSuccess, setPaymentSuccess] = useState(false),
  [orderId, setOrderId] = useState(null),
  [allDone, setAllDone] = useState(false),
  [fileContent, setFileContent] = useState(null),
  [fileName, setFileName] = useState(null),
  [loading, setLoading] = useState(false)

  useEffect(() => {
    const queryString = window.location.search,
      params = new URLSearchParams(queryString);

    const validation = params.get('validate') == 'true',
      order_id = params.get('order_id'),
      ref = params.get('ref');
    setPaymentValidation(validation);
    setValidationLoading(validation);
    setOrderId(order_id);
    if (validation) {
      fetch(`${API_ROOT}/form_api/annual_contract_validate`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ order_id, ref })
      }).then(
        r =>  r.json()
      ).then(obj => {
        setValidationLoading(false);
        setPaymentSuccess(obj.success);
        if (obj.already_done) {
          setAllDone(true);
        }
      });
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFile = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const formSubmit = (ev) => {
    ev.preventDefault()
    const data = {
      ...formData,
      trade_license_file_name: fileName,
      trade_license_file_content: fileContent,
      signature: generateChecksum()
    }
    const url = `${API_ROOT}/form_api/annual_contract`;
    setLoading(true)
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(
      r =>  r.json()
    ).then(obj => {
      location.href = obj.payment_url;
    });
  }

  if (allDone) {
    return <AllDone/>;
  }

  if (paymentValidation) {
    return (
      <>
        <br/><br/><br/>
        { validationLoading ?
          <ValidationLoading /> :
          ( paymentSuccess ?
            <AdditionalOrderDetails orderId={ orderId } /> :
            <PaymentFailed />
        )}
        <br/><br/><br/>
      </>
    );
  }

  return (
    <>
      <div className="container mt-5 col-md-6">
        <h2 className="text-center mb-4">
          Pest Control Annual/Monthly Contract (AMC)
        </h2>
        { loading ?
          <div className="d-flex justify-content-center">
            <Loader />
          </div> :
          <form onSubmit={ formSubmit }>
            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                placeholder="Enter company name"
                required
                name="company_name"
                value={formData.company_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="licenseNumber" className="form-label">
                License Number
              </label>
              <input
                type="text"
                className="form-control"
                id="licenseNumber"
                placeholder="Enter license number"
                required
                name="license_number"
                value={formData.license_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="taxInvoice" className="form-label">
                Tax Invoice No
              </label>
              <input
                type="text"
                className="form-control"
                id="taxInvoice"
                placeholder="Enter tax invoice number"
                required
                name="tax_invoice_number"
                value={formData.tax_invoice_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Telephone No
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter telephone number"
                required
                name="telephone_number"
                value={formData.telephone_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                State
              </label>
              <select
                className="form-select"
                id="location"
                required
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              >
                <option disabled="">
                  Choose City
                </option>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Sharjah">Sharjah</option>
                <option value="Fujairah">Fujairah</option>
                <option value="Umm Al Quwain">Umm Al Quwain</option>
                <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                <option value="Ajman">Ajman</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                Location, Address
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Enter Adress"
                required
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="treatedArea" className="form-label">
                Treated Area
              </label>
              <input
                type="text"
                className="form-control"
                id="treatedArea"
                placeholder="Enter treated area"
                required
                name="treated_area"
                value={formData.treated_area}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="startDate" className="form-label">
                  Contract Starting Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  required
                  name="starting_date"
                  value={formData.starting_date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="endDate" className="form-label">
                  Contract End Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  required
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="visitsPerYear" className="form-label">
                Number of Visits Per Year
              </label>
              <input
                type="number"
                className="form-control"
                id="visitsPerYear"
                placeholder="Enter number of visits"
                required
                name="number_of_visits"
                value={formData.number_of_visits}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tradeLicense" className="form-label">
                Upload Company Trade License
              </label>
              <input
                type="file"
                className="form-control"
                id="tradeLicense"
                accept=".pdf,.jpg,.jpeg,.png"
                required
                onChange={ handleFile }
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Generate Pest Control Agreement
              </button>
            </div>
          </form>
        }
      </div>
    </>
  );
};

export default Agreement ;
