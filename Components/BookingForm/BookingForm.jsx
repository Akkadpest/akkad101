"use client";

import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './booking-form.css';

import StartStep from './steps/StartStep';
import SelectServiceStep from './steps/SelectServiceStep';
import ServiceDetailsStep from './steps/ServiceDetailsStep';
import DateTimeStep from './steps/DateTimeStep';
import LocationStep from './steps/LocationStep';
import PaymentStep from './steps/PaymentStep';
import SummaryStep from './steps/SummaryStep';
import VerifyPhoneStep from './steps/VerifyPhoneStep';
import OrderCreatedStep from './steps/OrderCreatedStep';

const BookingFormInner = () => {
    const [currentStep, setCurrentStep] = useState('start');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [createdOrderId, setCreatedOrderId] = useState(null);

    const goToStep = (step) => {
        setCurrentStep(step);
        const el = document.getElementById('booking-form-root');
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const onSelectCategory = (categoryId) => {
        setSelectedCategoryId(categoryId);
        goToStep('select_service');
    };

    const onOrderCreated = (orderId) => {
        setCreatedOrderId(orderId);
        goToStep('order_created');
    };

    const renderStep = () => {
        switch (currentStep) {
            case 'start':
                return <StartStep onSelectCategory={ onSelectCategory } />;
            case 'select_service':
                return <SelectServiceStep categoryId={ selectedCategoryId } goToStep={ goToStep } />;
            case 'service_details':
                return <ServiceDetailsStep goToStep={ goToStep } />;
            case 'date_time':
                return <DateTimeStep goToStep={ goToStep } />;
            case 'location':
                return <LocationStep goToStep={ goToStep } />;
            case 'payment':
                return <PaymentStep goToStep={ goToStep } />;
            case 'summary':
                return <SummaryStep goToStep={ goToStep } />;
            case 'verify_phone':
                return <VerifyPhoneStep goToStep={ goToStep } onOrderCreated={ onOrderCreated } />;
            case 'order_created':
                return <OrderCreatedStep orderId={ createdOrderId } goToStep={ goToStep } />;
            default:
                return <StartStep onSelectCategory={ onSelectCategory } />;
        }
    };

    return (
        <div id="booking-form-root" className="akdbw-max-w-[900px] akdbw-mx-auto akdbw-font-sans">
            { renderStep() }
        </div>
    );
};

const BookingForm = () => {
    return (
        <Provider store={store}>
            <BookingFormInner />
        </Provider>
    );
};

export default BookingForm;
