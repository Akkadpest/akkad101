import { useAppSelector } from '../hooks';
import CheckoutProgress from '../shared/CheckoutProgress';
import ActionButton from '../shared/ActionButton';
import { selectCartItems, selectCartTotal } from '../store/cart';

const ServiceDetailsStep = ({ goToStep }) => {
    const cartTotal = useAppSelector(selectCartTotal),
        cartItems = useAppSelector(selectCartItems),
        vat = cartTotal * 0.05;

    return (
        <div>
            <CheckoutProgress step={ 1 } />
            <div className="akdbw-grid akdbw-grid-cols-1 akdbw-pt-5 akdbw-gap-5 akdbw-pb-5">
                <div className="akdbw-col-span-1">
                    <div className="akdbw-shadow-md akdbw-rounded-md akdbw-p-5">
                        <table className="akdbw-w-full">
                            <thead>
                                <tr>
                                    <td className="akdbw-border-b akdbw-border-dark_gray akdbw-py-3">Service</td>
                                </tr>
                            </thead>
                            <tbody>
                                { cartItems.map(cartItem => (
                                    <tr key={ cartItem.option.id }>
                                        <td className="akdbw-border-b akdbw-border-border_gray akdbw-py-2">
                                            { cartItem.service.name }
                                            <br />
                                            <span className="akdbw-text-blue akdbw-text-sm">{ cartItem.option.name }</span>
                                            <br/>
                                            <span className="akdbw-font-bold">{ cartItem.option.price * cartItem.count } AED</span>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                        <table className="akdbw-mt-10 akdbw-bg-pale_green akdbw-rounded-md akdbw-w-full">
                            <tbody>
                                <tr>
                                    <td className="akdbw-px-4 akdbw-py-2">Services:</td>
                                    <td className="akdbw-px-4 akdbw-py-2 akdbw-text-right">{ cartTotal } AED</td>
                                </tr>
                                <tr>
                                    <td className="akdbw-px-4 akdbw-py-2">VAT (5%):</td>
                                    <td className="akdbw-px-4 akdbw-py-2 akdbw-text-right">{ vat.toFixed(2) } AED</td>
                                </tr>
                                <tr>
                                    <td className="akdbw-px-4 akdbw-py-2 akdbw-font-bold">Total:</td>
                                    <td className="akdbw-px-4 akdbw-py-2 akdbw-font-bold akdbw-text-right">{ (cartTotal + vat).toFixed(2) } AED</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="akdbw-flex akdbw-items-center akdbw-py-2 akdbw-px-10 md:akdbw-pt-10 akdbw-justify-between akdbw-bg-white">
                <ActionButton uppercase={ true } onClick={ () => goToStep('start') } inverse={ true }>Prev</ActionButton>
                <ActionButton uppercase={ true } onClick={ () => goToStep('date_time') }>Next</ActionButton>
            </div>
        </div>
    );
};

export default ServiceDetailsStep;
