import Progress from './Progress';

const labels = [
    'Price',
    'Date & Time',
    'Location',
    'Payment',
    'Review & Confirm'
];

const CheckoutProgress = ({ step }) => {
    return (
        <div className="akdbw-p-2">
            <Progress
                steps={ labels }
                step={ step }
            />
            <div className="akdbw-pt-5 akdbw-text-center akdbw-font-bold akdbw-text-lg md:akdbw-hidden">{ labels[step - 1] }</div>
        </div>
    );
};

export default CheckoutProgress;
