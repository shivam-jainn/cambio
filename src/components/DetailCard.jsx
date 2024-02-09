import { useState } from "react";
import ColorButton from "./ColorButton";
function DetailCard() {
    const [colors, setColors] = useState(["red", "blue", "green", "yellow"])
    const [sizes, setSizes] = useState([5, 6, 7, 8, 9, 10, 11])
    return (
        <div className="w-2/5 ">
            <p className="text-5xl py-4 font-medium" >Nike SB Dunks </p>
            <p className="text-3xl">$ 40,999 </p>
            <p className="text-l my-4"> Colours</p>
            <div className="flex flex-row">
                {colors.map((color, index) => (
                    <ColorButton key={index} color={color} />
                )
                )}
            </div>
            <p className="text-l my-4">Size</p>
            <div className="flex flex-row">
                {sizes.map((size, index) => (
                    <button key={index} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">{size}</button>
                )
                )}
            </div>
            <button className="relative inline-flex items-center justify-center w-3/5 h-14 my-4 p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-5 py-2.5 w-full h-full transition-all ease-in duration-75 bg-white text-gray-800 rounded-md group-hover:bg-opacity-0">
                    Bid Now
                </span>
            </button>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 my-2 w-3/5 h-14 text-center  me-2 mb-2">Place Order</button>

        </div>
    )
}

export default DetailCard;