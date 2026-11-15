import clsx from 'clsx';

const ProgressDot = ({ active, done, step, label }) => (
    <div className="akdbw-flex akdbw-flex-col akdbw-items-center">
        <div className={clsx(
            "akdbw-w-[22px] akdbw-h-[22px] md:akdbw-w-[30px] md:akdbw-h-[30px] akdbw-rounded-full akdbw-relative",
            (!active && !done) && 'akdbw-bg-pale_green',
            active && 'akdbw-bg-green',
            done && 'akdbw-bg-green akdbw-leading-[22px] md:akdbw-leading-[30px] akdbw-text-center akdbw-text-white'
        )}>
            { active &&
                <div className="akdbw-w-[11px] akdbw-h-[11px] md:akdbw-w-[15px] md:akdbw-h-[15px] akdbw-bg-white akdbw-rounded-full akdbw-absolute akdbw-top-[50%] akdbw-left-[50%] akdbw-translate-x-[-50%] akdbw-translate-y-[-50%]"></div>
            }
            { done &&
                <>{''}&#10003;</>
            }
        </div>
        <div className={clsx(
            "akdbw-text-xs akdbw-hidden md:akdbw-block",
            active && 'akdbw-font-bold'
        )}>
            { label }
        </div>
    </div>
);

const Progress = ({ step, steps }) => {
    return (
        <div className="akdbw-relative">
            <div className="akdbw-absolute akdbw-border-t akdbw-border-dashed akdbw-border-green akdbw-top-[50%] md:akdbw-top-[15px] akdbw-left-0 akdbw-w-full md:akdbw-left-10 md:akdbw-right-10 md:akdbw-w-auto"></div>
            <div className="akdbw-flex akdbw-flex-row akdbw-justify-between">
                { steps.map((st, ind) => (
                    <ProgressDot
                        active={ step === ind + 1 }
                        done={ step > ind + 1 }
                        step={ ind + 1 }
                        key={ steps[ind] }
                        label={ steps[ind] }
                    />
                ))}
            </div>
        </div>
    );
};

export default Progress;
