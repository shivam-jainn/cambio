import Carousel from "../components/Carousel";
import OrderInfoCard from "../components/OrderInfoCard";
function PlaceOrderPage() {
    return (
        <>
            <div className="flex justify-evenly items-center mt-8">
                <Carousel />
                <OrderInfoCard color="red" size="10" />
            </div>
            <div className="flex w-[100%] ml-52 flex-row items-center justify-center">
                <div className="stats ml-16 mr-24 h-36 w-64 bg-primary text-primary-content justify-evenly">

                    <div className="stat items-center">
                        <div className="stat-title">Total Cost</div>
                        <div className="stat-value">$89,400</div>
                    </div>
                </div>
                <div className="w-4/5 items-center">
                    <button className="relative inline-flex items-center justify-center w-3/5 h-14 my-4 p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span className="relative px-5 py-2.5 w-full h-full transition-all ease-in duration-75 bg-white text-gray-800 rounded-md group-hover:bg-opacity-0">
                            Bid
                        </span>
                    </button>
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 my-2 w-3/5 h-14 text-center  me-2 mb-2">Confirm Order</button>
                </div>
            </div>

        </>
    )
}

export default PlaceOrderPage;