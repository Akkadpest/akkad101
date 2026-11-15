import { useAppDispatch, useAppSelector } from '../hooks';
import CheckoutProgress from '../shared/CheckoutProgress';
import ActionButton from '../shared/ActionButton';
import Heading from '../shared/Heading';
import { selectServiceDate, selectServiceTime, setServiceDate, setServiceTime } from '../store/cart';
import { timeSlots } from '../utils/time_slots';
import dayjs from 'dayjs';

const DateTimeStep = ({ goToStep }) => {
    const serviceDate = useAppSelector(selectServiceDate),
        serviceTime = useAppSelector(selectServiceTime),
        dispatch = useAppDispatch(),
        tomorrow = dayjs().add(1, 'day'),
        serviceDt = dayjs(serviceDate),
        today = dayjs(),
        dateValid = serviceDt.isAfter(today),
        stepInvalid = !dateValid || serviceDate === '' || serviceTime === '';

    return (
        <div>
            <CheckoutProgress step={ 2 } />
            <div className="akdbw-grid akdbw-grid-cols-1 akdbw-pt-5 akdbw-gap-5 akdbw-pb-5">
                <div className="akdbw-col-span-1">
                    <div className="akdbw-shadow-md akdbw-rounded-md akdbw-p-5">
                        <Heading size={3}>Which Day Would You Like Us To Come?</Heading>
                        <input
                            type="date"
                            value={ serviceDate }
                            min={ tomorrow.format('YYYY-MM-DD') }
                            onChange={ ev => {
                                dispatch(setServiceDate(ev.target.value));
                                const sdt = dayjs(ev.target.value),
                                    isTomorrow = sdt.format('YYYY-MM-DD') === tomorrow.format('YYYY-MM-DD');
                                if (isTomorrow) {
                                    dispatch(setServiceTime(''));
                                }
                            } }
                            placeholder="Select a date..."
                            className="akdbw-h-[38px] akdbw-leading-[38px] akdbw-mt-4 akdbw-w-full akdbw-border akdbw-border-border_gray akdbw-p-2 akdbw-rounded-md akdbw-bg-white akdbw-appearance-none"
                        />
                        { !dateValid && serviceDate !== '' &&
                            <div className="akdbw-py-2 akdbw-px-4 akdbw-bg-red-300 akdbw-mt-4 akdbw-text-white akdbw-rounded-md akdbw-border akdbw-border-red-500">
                                Booking on that date is not possible
                            </div>
                        }
                        <Heading className="akdbw-mt-8" size={3}> What Time Would You Like Us To Arrive?</Heading>
                        <select
                            className="akdbw-w-full akdbw-mt-4 akdbw-border akdbw-border-border_gray akdbw-p-2 akdbw-rounded-md akdbw-bg-white"
                            onChange={ (ev) => dispatch(setServiceTime(ev.target.value)) }
                            value={ serviceTime }
                        >
                            <option value="">Select a time...</option>
                            { timeSlots.map(slot => (
                                <option value={ slot } key={ slot }>
                                    { slot }
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="akdbw-flex akdbw-items-center akdbw-py-2 akdbw-px-10 md:akdbw-pt-10 akdbw-justify-between akdbw-bg-white">
                <ActionButton uppercase={ true } onClick={ () => goToStep('start') } inverse={ true }>Prev</ActionButton>
                <ActionButton uppercase={ true } disabled={ stepInvalid } onClick={ () => goToStep('location') }>Next</ActionButton>
            </div>
        </div>
    );
};

export default DateTimeStep;
