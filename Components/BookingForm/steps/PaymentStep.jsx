import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../hooks';
import CheckoutProgress from '../shared/CheckoutProgress';
import ActionButton from '../shared/ActionButton';
import Heading from '../shared/Heading';
import { selectPaymentType, setPaymentType } from '../store/cart';

const PaymentStep = ({ goToStep }) => {
    const dispatch = useAppDispatch(),
        paymentType = useAppSelector(selectPaymentType),
        stepInvalid = paymentType === '';

    return (
        <div>
            <CheckoutProgress step={ 4 } />
            <div className="akdbw-grid akdbw-grid-cols-1 akdbw-pt-5 akdbw-gap-5 akdbw-pb-5">
                <div className="akdbw-col-span-1">
                    <div className="akdbw-shadow-md akdbw-rounded-md akdbw-p-5">
                        <Heading size={3}>How Would You Like To Pay For Your Service?</Heading>
                        <div className="akdbw-py-3">You pay only after the service is completed</div>
                        <div
                            className={clsx(
                                "akdbw-text-lg akdbw-p-4 akdbw-border akdbw-border-green akdbw-rounded-md akdbw-shadow-md hover:akdbw-bg-green hover:akdbw-text-white akdbw-cursor-pointer",
                                (paymentType === 'card') && 'akdbw-bg-green akdbw-text-white'
                            )}
                            onClick={ () => dispatch(setPaymentType('card')) }
                        >
                            Credit card
                        </div>
                        <div
                            className={clsx(
                                "akdbw-text-lg akdbw-p-4 akdbw-border akdbw-border-green akdbw-rounded-md akdbw-shadow-md hover:akdbw-bg-green hover:akdbw-text-white akdbw-cursor-pointer akdbw-mt-5",
                                (paymentType === 'cash') && 'akdbw-bg-green akdbw-text-white'
                            )}
                            onClick={ () => dispatch(setPaymentType('cash')) }
                        >
                            Cash on delivery
                        </div>
                    </div>
                </div>
            </div>
            <div className="akdbw-flex akdbw-items-center akdbw-py-2 akdbw-px-10 md:akdbw-pt-10 akdbw-justify-between akdbw-bg-white">
                <ActionButton uppercase={ true } onClick={ () => goToStep('location') } inverse={ true }>Prev</ActionButton>
                <ActionButton uppercase={ true } disabled={ stepInvalid } onClick={ () => goToStep('summary') }>Next</ActionButton>
            </div>
        </div>
    );
};

export default PaymentStep;
