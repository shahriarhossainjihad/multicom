const Button = ({ children }) => {
    return (
        <button className="bg-red-500 text-white px-5 py-2 rounded-md text-xl font-bold">{children}</button>
    );
};

export default Button;