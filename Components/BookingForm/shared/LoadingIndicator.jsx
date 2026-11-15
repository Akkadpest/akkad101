export const LoadingIndicator = () => (
    <div className="akdbw-w-full akdbw-flex akdbw-justify-center akdbw-items-center akdbw-py-40">
        <div className="akdbw-animate-spin akdbw-w-32 akdbw-h-32 akdbw-border-4 akdbw-border-green akdbw-border-t-white akdbw-rounded-full"></div>
    </div>
);

export const LoadingOverlay = () => (
    <div className="akdbw-absolute akdbw-inset-0 akdbw-bg-white/70 akdbw-flex akdbw-justify-center akdbw-items-center akdbw-z-50">
        <div className="akdbw-animate-spin akdbw-w-20 akdbw-h-20 akdbw-border-4 akdbw-border-green akdbw-border-t-white akdbw-rounded-full"></div>
    </div>
);
