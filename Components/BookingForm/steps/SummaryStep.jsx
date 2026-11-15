import { useAppSelector } from '../hooks';
import CheckoutProgress from '../shared/CheckoutProgress';
import ActionButton from '../shared/ActionButton';
import Heading from '../shared/Heading';
import {
    selectCartItems,
    selectServiceDate,
    selectServiceTime,
    selectLocationName,
    selectPhone,
    selectEmail,
    selectPaymentType
} from '../store/cart';

const EditLink = ({ onClick }) => (
    <div className="akdbw-text-xs akdbw-text-blue akdbw-underline hover:akdbw-no-underline akdbw-cursor-pointer" onClick={ onClick }>Edit</div>
);

const Summary = ({ title, displayEditLinks, goToStep }) => {
    const cartItems = useAppSelector(selectCartItems),
        serviceDate = useAppSelector(selectServiceDate),
        serviceTime = useAppSelector(selectServiceTime),
        locationName = useAppSelector(selectLocationName),
        phone = useAppSelector(selectPhone),
        email = useAppSelector(selectEmail),
        paymentType = useAppSelector(selectPaymentType);

    return (
        <div className="akdbw-shadow-md akdbw-rounded-md akdbw-p-4">
            <Heading size={ 3 } className="akdbw-border-b akdbw-border-border_gray">
                { title ? title : 'Summary' }
            </Heading>
            { (serviceDate !== '' || serviceTime !== '') &&
                <div className="akdbw-mt-5 akdbw-border-b akdbw-border-border_gray akdbw-pb-3">
                    <Heading size={ 4 } className="akdbw-mb-3 akdbw-flex akdbw-justify-between akdbw-items-center">
                        Date &amp; Time
                        { displayEditLinks && <EditLink onClick={ () => goToStep('date_time') }/> }
                    </Heading>
                    { serviceDate !== '' &&
                        <div className="akdbw-flex akdbw-flex-row akdbw-justify-between">
                            <div className="akdbw-font-medium">Date</div>
                            <div>{ serviceDate }</div>
                        </div>
                    }
                    { serviceTime !== '' &&
                        <div className="akdbw-flex akdbw-flex-row akdbw-justify-between">
                            <div className="akdbw-font-medium">Time range</div>
                            <div>{ serviceTime }</div>
                        </div>
                    }
                </div>
            }
            { (locationName && locationName !== '') &&
                <div className="akdbw-mt-5 akdbw-border-b akdbw-border-border_gray akdbw-pb-3">
                    <Heading size={ 4 } className="akdbw-mb-3 akdbw-flex akdbw-justify-between akdbw-items-center">
                        Location &amp; Contact
                        { displayEditLinks && <EditLink onClick={ () => goToStep('location') }/> }
                    </Heading>
                    <div className="akdbw-pt-3">{ locationName }</div>
                    { phone !== '' &&
                        <div className="akdbw-flex akdbw-flex-row akdbw-justify-between">
                            <div className="akdbw-font-medium">Phone</div>
                            <div>{ phone }</div>
                        </div>
                    }
                    { email !== '' &&
                        <div className="akdbw-flex akdbw-flex-row akdbw-justify-between">
                            <div className="akdbw-font-medium">Email</div>
                            <div>{ email }</div>
                        </div>
                    }
                </div>
            }
            <div className="akdbw-mt-5">
                <Heading size={ 4 } className="akdbw-mb-3 akdbw-flex akdbw-justify-between akdbw-items-center">
                    Payment
                    { displayEditLinks && <EditLink onClick={ () => goToStep('payment') }/> }
                </Heading>
                { paymentType !== '' &&
                    <div className="akdbw-flex akdbw-flex-row akdbw-justify-between">
                        <div className="akdbw-font-medium">Payment type</div>
                        <div>{ paymentType }</div>
                    </div>
                }
            </div>
        </div>
    );
};

const SummaryStep = ({ goToStep }) => {
    return (
        <div>
            <CheckoutProgress step={ 5 } />
            <div className="akdbw-max-w-[800px] akdbw-mx-auto akdbw-pt-5 akdbw-bg-white akdbw-mt-10">
                <Summary
                    title="Please review your booking details and confirm your booking"
                    displayEditLinks={ true }
                    goToStep={ goToStep }
                />
            </div>
            <div className="akdbw-text-center akdbw-py-10">
                <ActionButton
                    uppercase={ true }
                    onClick={ () => goToStep('verify_phone') }
                    className="akdbw-py-4 akdbw-px-10 akdbw-font-bold akdbw-text-lg"
                >
                    Book Now
                </ActionButton>
            </div>
        </div>
    );
};

export default SummaryStep;
