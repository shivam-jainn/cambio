import Carousel from "../components/Carousel";
import DetailCard from "../components/DetailCard";
function BidPage() {
    return (
        <>
            <div className="flex justify-evenly items-center mt-8">
                <Carousel />
                <DetailCard />


            </div>
            <div className="flex items-center">
                <div className="stats shadow w-1/2 h-40 ml-16">

                    <div className="stat">
                        <div className="stat-title">Total</div>
                        <div className="stat-value text-primary">$89,400</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Last Bid</div>
                        <div className="stat-value text-secondary">$87,950</div>
                    </div>

                    <div className="stat">
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Chance of winning</div>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly ml-12 w-96">
                    <p className="text-2xl font-semibold pb-6">Place a bid</p>
                    <input type="text" placeholder="$" className="input input-bordered input-info w-full max-w-xs" />
                </div>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 my-2 h-12 text-center w-36 mt-14 me-2 mb-2">Place</button>
            </div>
        </>
    )
}

export default BidPage;