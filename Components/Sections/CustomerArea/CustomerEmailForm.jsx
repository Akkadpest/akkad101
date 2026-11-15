'use client'

import { FormEvent, useEffect, useState } from "react";
import MessageBox, { MESSAGE_BOX_ERROR, MESSAGE_BOX_SUCCESS } from "./MessageBox";
import Loader from "./Loader";

const API_ROOT = 'https://gov.pestcontrol.ae/client_api/'

const CustomerEmailForm = () => {
    const [phone, setPhone] = useState(''),
        [email, setEmail] = useState(''),
        [uid, setUid] = useState(''),
        [loading, setLoading] = useState(true),
        [notFound, setNotFound] = useState(false),
        [done, setDone] = useState(false),
        [already, setAlready] = useState(false),
        [formError, setFormError] = useState([]),
        [error, setError] = useState(null)

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search),
            uid = urlParams.get('uid')
        setUid(uid || '')
        fetch(`${API_ROOT}event?uid=${uid}`).then(response => response.json()).then((data) => {
            setLoading(false)
            if (data.event) {
                setPhone(data.event.phone)
                setAlready(data.event.email !== '' && data.event.email !== null)
                if (data.event.email !== '' && data.event.email !== null) {
                    window.location.href = '/my-warranty#/login'
                }
            } else {
                setNotFound(true)
            }
        })
    }, [])

    if (loading) {
        return <Loader />
    }

    if (already) {
        return <MessageBox kind={ MESSAGE_BOX_ERROR }>Your already left your email</MessageBox>
    }

    if (notFound) {
        return <MessageBox kind={ MESSAGE_BOX_ERROR }>Your booking is not found</MessageBox>
    }

    if (done) {
        return <MessageBox kind={ MESSAGE_BOX_SUCCESS }>Your email successfully saved</MessageBox>
    }

    if (error) {
        return <MessageBox kind={ MESSAGE_BOX_ERROR }>{ error }</MessageBox>
    }

    const saveData = (ev) => {
        ev.preventDefault()
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            phoneRegex = /^[0-9]{10}$/,
            errors = []
        if (!email.match(validRegex)) {
            errors.push('Email is not correct')
        }
        if (!phone.match(phoneRegex)) {
            errors.push('Phone number is incorrect')
        }
        setFormError(errors)
        if (errors.length > 0) {
            return
        }

        setLoading(true)
        fetch(`${API_ROOT}update_event`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid,
                event: {
                    phone,
                    email
                }
            })
        }).then(response => response.json()).then((data) => {
            setLoading(false)
            setDone(data.success)
            if (data.success) {
                localStorage.setItem('akkad_booking_token', data.token)
                window.location.href = '/customer-section'
                setError(null)
            } else {
                setError(data.message)
            }
        })
    }

    return (
        <form onSubmit={ saveData }>
            { formError.length > 0 &&
                <MessageBox kind={ MESSAGE_BOX_ERROR }>
                    { formError.map(e => (
                        <div key={ e }>
                            {e}<br/>
                        </div>
                    )) }
                </MessageBox>
            }
            <h3>Enter your email to receive your warranty</h3>
            <br />
            <br />
            <a href="/customer-section">My account</a>
            <br />
            <div className="mb-3">
                <label htmlFor="phoneInput" className="form-label">Phone number</label>
                <input
                    id="phoneInput"
                    className="form-control"
                    type="text"
                    value={ phone }
                    onChange={ ev => setPhone(ev.target.value) }
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email</label>
                <input
                    id="emailInput"
                    className="form-control"
                    type="email"
                    value={ email }
                    onChange={ ev => setEmail(ev.target.value) }
                    required
                />
            </div>
            <div className="d-grid">
                <button
                    type="submit"
                    className="btn btn-success"
                    disabled={ email === '' || phone === '' }
                >
                    Save
                </button>
            </div>
        </form>
    );
}

export default CustomerEmailForm;
