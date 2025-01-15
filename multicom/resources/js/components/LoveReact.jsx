import { Icon } from "@iconify/react/dist/iconify.js";

const LoveReact = () => {
    return (
        <>
            <Icon
                icon="solar:heart-linear"
                width="24"
                height="24"
                className="absolute top-5 right-5 z-10 text-green-500 transition-all hover:opacity-0 cursor-pointer"
            />

            {/* Hover Icon */}
            <Icon
                icon="solar:heart-bold"
                width="24"
                height="24"
                className="absolute top-5 right-5 z-10 text-red-500 transition-all opacity-0 hover:opacity-100 cursor-pointer"
            />
        </>
    );
};

export default LoveReact;