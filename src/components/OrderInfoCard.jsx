import ColorButton from "./ColorButton";
function OrderInfoCard(props) {
    return (
        <div className="w-2/5 ">
            <p className="text-5xl py-4 font-medium" >Nike SB Dunks </p>
            <p className="text-3xl">$ 40,999 </p>
            <p className="text-l my-4"> Colour</p>
            <div className="flex flex-row">
                <ColorButton color={props.color} />
            </div>
            <p className="text-l my-4">Size</p>
            <div className="flex flex-row">
                <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">{props.size}</button>
            </div>

        </div>
    )
}

export default OrderInfoCard;