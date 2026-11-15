import { AcceptedIcon } from '../icons/AcceptedIcon';
import ActionButton from '../shared/ActionButton';
import { LoadingIndicator } from '../shared/LoadingIndicator';
import { useGetBookingInfoQuery } from '../store/bookings';

const bookingIsComplete = (booking) => (
    booking.payment === 'cash' || (booking.payment === 'card' && booking.online_payment_status === 'SUCCESS')
);

const OrderCreatedStep = ({ orderId, goToStep }) => {
    const { data: booking, isLoading } = useGetBookingInfoQuery(orderId);

    if (isLoading || !booking) {
        return <LoadingIndicator />;
    }

    return (
        <div className="akdbw-py-10 akdbw-mx-auto akdbw-max-w-[500px] akdbw-text-center">
            { bookingIsComplete(booking) ?
                <>
                    <div className="akdbw-text-2xl akdbw-font-bold akdbw-text-center">Booking received</div>
                    <hr className="akdbw-my-4" />
                    <AcceptedIcon className="akdbw-mx-auto akdbw-my-10 akdbw-text-green akdbw-scale-150" />
                    <div className="akdbw-bg-[#F6F7FC] akdbw-border akdbw-border-border_gray akdbw-rounded-md akdbw-p-5 akdbw-my-6 akdbw-text-sm akdbw-leading-relaxed">
                        Our customer support team will contact you shortly to confirm your booking details and schedule.
                    </div>
                    <div className="akdbw-text-center akdbw-pt-5">
                        <ActionButton
                            uppercase={ true }
                            onClick={ () => goToStep('start') }
                        >
                            New Booking
                        </ActionButton>
                    </div>
                </> :
                <>
                    <div className="akdbw-text-2xl akdbw-font-bold akdbw-text-center">Your payment has not passed</div>
                    <hr className="akdbw-my-4" />
                    <div className="akdbw-text-center akdbw-pt-5">
                        <ActionButton
                            uppercase={ true }
                            onClick={ () => goToStep('start') }
                        >
                            New Booking
                        </ActionButton>
                    </div>
                </>
            }
        </div>
    );
};

export default OrderCreatedStep;
