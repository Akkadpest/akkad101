import clsx from 'clsx';

const Heading = ({ children, size, className }) => {
    return (
        <div className={clsx(
            "akdbw-font-semibold",
            className,
            size === 3 && 'akdbw-text-lg',
            size === 4 && 'akdbw-text-md'
        )}>
            { children }
        </div>
    );
};

export default Heading;
