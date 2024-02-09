const ColorButton = ({ color }) => {

    return (
        <button
            className="rounded-full w-12 h-12 mr-4 flex justify-center items-center text-white border-none focus:outline-none"
            style={{ backgroundColor: color }}
        ></button>
    );
};


export default ColorButton;