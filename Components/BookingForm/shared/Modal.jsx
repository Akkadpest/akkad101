import clsx from 'clsx';
import { useEffect } from 'react';

const Modal = ({ noPadding, children, onClose, visible, fullscreen }) => {
    useEffect(() => {
        if (visible) {
            document.body.classList.add('akdbw-overflow-hidden');
        } else {
            document.body.classList.remove('akdbw-overflow-hidden');
        }
    }, [visible]);

    return (
        <>
            <div
                className={clsx(
                    "akdbw-fixed akdbw-left-0 akdbw-w-full akdbw-h-full akdbw-bg-semi_transp_black",
                    visible && 'akdbw-top-0',
                    !visible && 'akdbw-top-[-100%]'
                )}
                style={ { zIndex: 999999999 } }
            ></div>
            <div
                className={clsx(
                    "akdbw-fixed akdbw-left-0 akdbw-w-full akdbw-h-full akdbw-overflow-y-auto akdbw-transition-all",
                    visible && 'akdbw-top-0',
                    !visible && 'akdbw-top-[-100%]'
                )}
                style={ { zIndex: 9999999999 } }
            >
                <div className={clsx(
                    "akdbw-top-[7%] akdbw-max-h-[86%] akdbw-bg-white akdbw-z-50 akdbw-max-w-[90%] md:akdbw-max-w-[700px] akdbw-relative akdbw-mb-20 akdbw-left-[50%] akdbw-translate-x-[-50%]",
                    fullscreen && 'akdbw-h-[86%]',
                    !noPadding && ' akdbw-py-6'
                )}>
                    <div
                        onClick={ onClose }
                        className="akdbw-absolute akdbw-rounded-full akdbw-bg-white akdbw-text-center akdbw-text-2xl akdbw-top-[-10px] akdbw-right-[-10px] akdbw-w-[32px] akdbw-h-[32px] akdbw-leading-[29px] akdbw-shadow-md akdbw-cursor-pointer"
                    >&times;</div>
                    <div className={clsx(
                        "akdbw-h-full akdbw-overflow-auto",
                        !noPadding && 'akdbw-px-6'
                    )}>
                        { children }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
