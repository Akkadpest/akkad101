import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import CheckoutProgress from '../shared/CheckoutProgress';
import ActionButton from '../shared/ActionButton';
import { LoadingOverlay } from '../shared/LoadingIndicator';
import {
    useSendCodeMutation,
    useConfirmPhoneMutation,
    useCreateBookingMutation
} from '../store/bookings';
import { clearCart, selectWholeCart, selectPhone } from '../store/cart';

const VerifyPhoneStep = ({ goToStep, onOrderCreated }) => {
    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState('');
    const [codeSent, setCodeSent] = useState(false);

    const phone = useAppSelector(selectPhone);
    const cartData = useAppSelector(selectWholeCart);
    const dispatch = useAppDispatch();

    const [sendCodeApi, sendCodeState] = useSendCodeMutation();
    const [confirmPhoneApi, confirmPhoneState] = useConfirmPhoneMutation();
    const [createBookingApi, createBookingState] = useCreateBookingMutation();

    useEffect(() => {
        if (!codeSent) {
            sendCodeApi({ phone }).then((res) => {
                if (res.data?.success) {
                    setCodeSent(true);
                } else {
                    setCodeError(res.data?.message || 'Failed to send verification code');
                }
            }).catch(() => {
                setCodeError('Failed to send verification code');
            });
            setCodeSent(true);
        }
    }, []);

    const resendCode = async () => {
        setCodeError('');
        const res = await sendCodeApi({ phone });
        if (res.data?.success) {
            setCodeSent(true);
        } else {
            setCodeError(res.data?.message || 'Failed to resend code');
        }
    };

    const verifyAndBook = async (ev) => {
        ev.preventDefault();
        setCodeError('');

        // Step 1: confirm phone with code
        let confirmResult;
        try {
            confirmResult = await confirmPhoneApi({ login_code: code, phone }).unwrap();
        } catch {
            setCodeError('Verification failed. Please try again.');
            return;
        }

        if (!confirmResult.success) {
            setCodeError(confirmResult.message || 'Invalid verification code');
            return;
        }

        // Step 2: save token
        if (confirmResult.token) {
            localStorage.setItem('akkad_booking_token', confirmResult.token);
        }

        // Step 3: create booking
        let bookingResult;
        try {
            bookingResult = await createBookingApi({
                ...cartData,
                mobile_app: 0
            }).unwrap();
        } catch {
            dispatch(clearCart());
            alert('Error creating order');
            goToStep('start');
            return;
        }

        if (bookingResult.success) {
            if (bookingResult.payment_url) {
                window.location.href = bookingResult.payment_url;
            } else {
                dispatch(clearCart());
                onOrderCreated(bookingResult.id);
            }
        } else {
            dispatch(clearCart());
            alert('Error creating order');
            goToStep('start');
        }
    };

    const isLoading = sendCodeState.isLoading || confirmPhoneState.isLoading || createBookingState.isLoading;

    return (
        <div>
            <CheckoutProgress step={ 5 } />
            <div className="akdbw-max-w-[500px] akdbw-mx-auto akdbw-pt-10">
                <div className="akdbw-shadow-md akdbw-rounded-md akdbw-p-6 akdbw-relative">
                    { isLoading && <LoadingOverlay /> }
                    <div className="akdbw-text-xl akdbw-font-bold akdbw-text-center akdbw-mb-2">
                        Verify Your Phone Number
                    </div>
                    <div className="akdbw-text-center akdbw-text-sm akdbw-mb-6">
                        We sent a confirmation code to <span className="akdbw-font-bold">{ phone }</span>
                    </div>

                    { codeError &&
                        <div className="akdbw-py-2 akdbw-px-4 akdbw-bg-red-400 akdbw-text-white akdbw-rounded-md akdbw-mb-4 akdbw-text-center">
                            { codeError }
                        </div>
                    }

                    <form onSubmit={ verifyAndBook }>
                        <label className="akdbw-font-bold akdbw-block akdbw-mb-2">Enter verification code:</label>
                        <input
                            type="text"
                            value={ code }
                            onChange={ (ev) => setCode(ev.target.value) }
                            placeholder="Enter code..."
                            className="akdbw-w-full akdbw-border akdbw-border-border_gray akdbw-py-3 akdbw-px-4 akdbw-rounded-md akdbw-text-center akdbw-text-lg akdbw-tracking-widest"
                            autoFocus
                            disabled={ isLoading }
                        />
                        <div className="akdbw-text-center akdbw-mt-8">
                            <ActionButton
                                submit={ true }
                                uppercase={ true }
                                onClick={ () => {} }
                                disabled={ code.trim() === '' || isLoading }
                                className="akdbw-py-4 akdbw-px-10 akdbw-font-bold akdbw-text-lg"
                            >
                                Verify &amp; Book Now
                            </ActionButton>
                        </div>
                    </form>

                    <div className="akdbw-text-center akdbw-mt-4">
                        <span className="akdbw-text-sm">Didn&apos;t receive the code? </span>
                        <span
                            className="akdbw-text-sm akdbw-text-blue akdbw-underline akdbw-cursor-pointer hover:akdbw-no-underline"
                            onClick={ isLoading ? undefined : resendCode }
                        >
                            Resend
                        </span>
                    </div>
                </div>
            </div>
            <div className="akdbw-flex akdbw-items-center akdbw-py-2 akdbw-px-10 md:akdbw-pt-10 akdbw-justify-start akdbw-bg-white">
                <ActionButton uppercase={ true } onClick={ () => goToStep('summary') } inverse={ true } disabled={ isLoading }>Back</ActionButton>
            </div>
        </div>
    );
};

export default VerifyPhoneStep;
