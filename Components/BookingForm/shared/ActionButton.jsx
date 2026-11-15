import clsx from 'clsx';

const ActionButton = ({ noBorder, small, uppercase, disabled, children, onClick, inverse, danger, className, submit }) => {
    return (
        <button
            type={ submit ? 'submit' : 'button' }
            disabled={ disabled }
            onClick={ submit ? () => {} : onClick }
            className={clsx(
                "akdbw-rounded-md akdbw-border",
                small ? 'akdbw-py-1 akdbw-px-6' : 'akdbw-py-2 akdbw-px-5',
                uppercase && 'akdbw-uppercase',
                danger && 'akdbw-bg-red-500 akdbw-border-red-500 akdbw-text-white enabled:hover:akdbw-bg-white enabled:hover:akdbw-text-red-500',
                (!danger && !inverse) && 'akdbw-bg-green akdbw-text-white enabled:hover:akdbw-bg-white enabled:hover:akdbw-text-green akdbw-border-green',
                (!danger && inverse) && 'enabled:hover:akdbw-bg-green enabled:hover:akdbw-text-white akdbw-bg-white akdbw-text-green akdbw-border-green',
                (inverse && noBorder) && 'akdbw-border-white',
                disabled && 'akdbw-opacity-50',
                className
            )}
            title={ disabled ? 'Please fill all fields' : '' }
        >
            { children }
        </button>
    );
};

export default ActionButton;
