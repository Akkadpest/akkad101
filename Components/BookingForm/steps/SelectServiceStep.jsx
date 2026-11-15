import { useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { useGetServicesQuery } from '../store/services';
import { addToCart } from '../store/cart';
import { LoadingIndicator } from '../shared/LoadingIndicator';
import ActionButton from '../shared/ActionButton';
import Modal from '../shared/Modal';
import { DayAndNightIcon } from '../icons/DayAndNightIcon';
import { ServiceTimeIcon } from '../icons/ServiceTimeIcon';
import { CustomersIcon } from '../icons/CustomersIcon';

const Open24Hrs = ({ className, iconClassName }) => (
    <div className={clsx(
        "akdbw-flex akdbw-flex-row akdbw-pb-8 akdbw-items-center",
        className
    )}>
        <DayAndNightIcon className={ iconClassName }/>
        <div className="akdbw-pl-2">Open 24 hours</div>
    </div>
);

const Stars = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < Math.round(rating); i++) {
        stars.push(
            <span key={i} style={{ color: 'rgb(255, 160, 1)' }}>&#9733;</span>
        );
    }
    return <>{stars}</>;
};

const ServiceInfo = ({ service, goToStep }) => {
    const [showServiceDetails, setShowServiceDetails] = useState(0);
    const dispatch = useDispatch();

    const doAddToCart = (option) => {
        dispatch(addToCart({ service, option }));
        goToStep('service_details');
    };
    console.log(service)

    return (
        <div className={ `akdbw-py-10 akdbw-mb-3 akdbw-border-t akdbw-border-black js-service-block-${service.id}` }>
            <div className="akdbw-pb-2 akdbw-px-3">
                <div className="akdbw-text-2xl akdbw-font-bold">{ service.name }</div>
                <Open24Hrs className="akdbw-text-sm"/>
            </div>
            <div className="akdbw-pb-4">
                <div dangerouslySetInnerHTML={{ __html: service.service_details }} />
            </div>
            { service.options.map(option => (
                <div key={ option.id } className="akdbw-px-3 akdbw-pt-5 akdbw-mb-2 akdbw-shadow-lg akdbw-border-t akdbw-border-b akdbw-border-border_gray akdbw-bg-[#F6F7FC]">
                    <div className="akdbw-flex akdbw-flex-row akdbw-border-b akdbw-border-black akdbw-pb-3">
                        <div className="akdbw-w-8/12 akdbw-flex akdbw-flex-col akdbw-justify-between">
                            <div>
                                <div className="akdbw-text-xl akdbw-font-bold">{ option.name }</div>
                                <div className="akdbw-text-sm akdbw-flex akdbw-flex-row akdbw-py-1">
                                    <div>
                                        <Stars rating={service.rating} /> <span className="akdbw-text-black">{ service.rating }</span>
                                        <Open24Hrs className="akdbw-text-xs akdbw-py-2" iconClassName="akdbw-scale-75"/>
                                    </div>
                                    <div className="akdbw-flex akdbw-flex-row akdbw-text-xs akdbw-pl-3 akdbw-pt-[2px]">
                                        <ServiceTimeIcon/>
                                        <div>Service <span className="akdbw-whitespace-nowrap">{ option.service_time } min</span></div>
                                    </div>
                                </div>
                            </div>
                            <ul className="akdbw-text-sm">
                                <div dangerouslySetInnerHTML={{__html: option.description}}></div>
                            </ul>
                        </div>
                        <div className="akdbw-w-4/12 akdbw-ml-3 akdbw-flex akdbw-flex-col akdbw-justify-between">
                            <div className="akdbw-font-bold akdbw-text-center akdbw-text-lg">
                                { option.warranty_months } Months warranty
                            </div>
                            <img src={ service.img } className="akdbw-max-w-[130px] akdbw-mt-5 akdbw-mx-auto" alt="" />
                        </div>
                    </div>
                    <div className="akdbw-flex akdbw-flex-row akdbw-border-b akdbw-py-2">
                        <div className="akdbw-w-1/2 md:akdbw-w-8/12 akdbw-pr-2">
                            <div className="akdbw-flex akdbw-flex-col akdbw-justify-between akdbw-h-full text-center">
                                <div className="akdbw-inline-block">
                                    <div className="akdbw-flex akdbw-flex-row akdbw-items-center">
                                        <CustomersIcon />
                                        <span className="akdbw-text-sm akdbw-pr-2">{ option.booking_count / 1000 }k</span>
                                        Bookings
                                    </div>
                                </div>
                                <ActionButton
                                    onClick={ () => setShowServiceDetails(showServiceDetails === option.id ? 0 : option.id) }
                                    inverse={ true }
                                    noBorder={ true }
                                    className="akdbw-mt-5"
                                >
                                    See all Details
                                </ActionButton>
                            </div>
                        </div>
                        <div className="akdbw-w-1/2 md:akdbw-w-4/12 akdbw-flex akdbw-flex-col akdbw-justify-between akdbw-pl-2">
                            { option.old_price > 0 &&
                                <div className="akdbw-text-center akdbw-line-through akdbw-px-3 akdbw-text-dark_gray">{ option.old_price } AED</div>
                            }
                            <div className="akdbw-text-center akdbw-font-bold akdbw-px-4 akdbw-py-1 akdbw-text-lg akdbw-nowrap">
                                { option.price } AED
                            </div>
                            <ActionButton
                                onClick={ () => doAddToCart(option) }
                                uppercase={ true }
                                className="akdbw-w-full akdbw-mt-4"
                            >
                                Book
                            </ActionButton>
                        </div>
                    </div>
                </div>
            )) }
            <Modal
                visible={ showServiceDetails !== 0 }
                onClose={ () => setShowServiceDetails(0) }
                fullscreen={ true }
                noPadding={ true }
            >
                <div>
                    <div dangerouslySetInnerHTML={{__html: service.service_details}}></div>
                </div>
            </Modal>
        </div>
    );
};

const SelectServiceStep = ({ categoryId, goToStep }) => {
    const { data, isLoading } = useGetServicesQuery();

    if (isLoading || !data) {
        return <LoadingIndicator />;
    }

    return (
        <div className="akdbw-pb-10 akdbw-pt-5 md:akdbw-py-10">
            <div className="akdbw-flex akdbw-items-center akdbw-justify-between akdbw-px-3 akdbw-mb-4">
                <button
                    onClick={ () => goToStep('start') }
                    className="akdbw-flex akdbw-items-center akdbw-gap-2 akdbw-text-green akdbw-cursor-pointer akdbw-bg-transparent akdbw-border-0 akdbw-text-base hover:akdbw-underline"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5"/>
                        <path d="M12 19l-7-7 7-7"/>
                    </svg>
                    Back to Services
                </button>
                <button
                    onClick={ () => goToStep('start') }
                    className="akdbw-flex akdbw-items-center akdbw-justify-center akdbw-w-8 akdbw-h-8 akdbw-rounded-full akdbw-border akdbw-border-gray-300 akdbw-bg-white akdbw-text-gray-500 akdbw-cursor-pointer akdbw-text-xl akdbw-leading-none hover:akdbw-bg-gray-100"
                    title="Close"
                >
                    &times;
                </button>
            </div>
            { data.filter(x => x.id === categoryId).map(service => (
                <ServiceInfo key={ service.id } service={ service } goToStep={ goToStep } />
            )) }
        </div>
    );
};

export default SelectServiceStep;
