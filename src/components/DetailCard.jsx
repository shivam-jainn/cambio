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

        </div>
    )
}

export default DetailCard;