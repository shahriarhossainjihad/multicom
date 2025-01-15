const Badge = ({ discountAmount }) => {
    return (
        <>
            <div className='absolute top-[35px] -left-[4px] w-4 h-4 bg-gradient-to-b from-[#FFA03B] to-[#F27D00] rotate-[130deg] -z-10'></div>
            <div className='absolute top-5 -left-2 bg-gradient-to-b from-[#FFA03B] to-[#F27D00] text-md h-6 w-[80px] px-3 text-white rounded-ss-lg z-20 text-center'>
                <p>-{" "}${discountAmount}</p>
            </div>
            <div
                className="absolute top-5 left-[60px] h-6 w-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[24px] border-b-[#F27D00] before:absolute before:top-0 before:-left-3 before:h-6 before:w-0 before:border-l-[12px] before:border-l-transparent before:border-r-[12px] before:border-r-transparent before:border-b-[24px] before:border-b-[#F7B166] before:rotate-180 rounded-sm before:rounded-sm z-10"
            >
            </div>
        </>
    );
};

export default Badge;