import { useGetServicesQuery } from '../store/services';
import { LoadingIndicator } from '../shared/LoadingIndicator';

const StartStep = ({ onSelectCategory }) => {
    const { data, isLoading } = useGetServicesQuery();

    if (isLoading || !data) {
        return <LoadingIndicator />;
    }

    return (
        <div className="akdbw-pb-10 akdbw-pt-5 akdbw-px-5 md:akdbw-py-10">
            <div className="akdbw-max-w-[700px] akdbw-mx-auto">
                <div className="akdbw-border-b akdbw-border-black akdbw-text-center akdbw-py-3">
    <h3 className="akdbw-text-2xl akdbw-font-bold">Book Your Service</h3>
    <div>Select a service to schedule your pest control treatment</div>
</div>
                <div className="akdbw-p-5">
                    <div className="akdbw-px-3 md:akdbw-px-0">
                        <div className="akdbw-grid akdbw-grid-cols-2 md:akdbw-grid-cols-3 xl:akdbw-grid-cols-4 akdbw-gap-4 md:akdbw-gap-6">
                            { data.map(service => (
                                <div
                                    key={service.id}
                                    className="akdbw-mb-5 akdbw-border-green akdbw-rounded-lg md:akdbw-border-0 akdbw-cursor-pointer akdbw-text-center"
                                    onClick={ () => onSelectCategory(service.id) }
                                >
                                    <img src={ service.img } alt={ service.name } className="akdbw-mx-auto" />
                                    <div className="akdbw-font-bold akdbw-px-1 md:akdbw-px-3 akdbw-py-2 akdbw-text-center akdbw-text-sm md:akdbw-text-lg">{ service.name }</div>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartStep;
