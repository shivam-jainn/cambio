
import Carousel from "../components/Carousel";
import DetailCard from "../components/DetailCard";
import ProductCard from "../components/ProductCard";
function ProductPage() {
    return (
        <>
            <div className="flex justify-start items-center mt-8">
                <Carousel />
                <div className="w-1/2">
                    <DetailCard />
                    <div>
                        <button className="relative inline-flex items-center justify-center w-3/5 h-14 my-4 p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-1 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span className="relative px-5 py-2.5 w-full h-full transition-all ease-in duration-75 bg-white text-gray-800 rounded-md group-hover:bg-opacity-0">
                                Bid Now
                            </span>
                        </button>
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 my-2 w-3/5 h-14 text-center  me-2 mb-2">Place Order</button>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-3xl m-6 px-12">Products You May Like</p>
            </div>

            <div className="flex ml-10 mr-14 px-4 py-4 overflow-hidden overflow-x-scroll width-[100%] ">
                {[...Array(10)].map((_, index) => (
                    <ProductCard />
                ))}
            </div>


        </>
    )
}

export default ProductPage;