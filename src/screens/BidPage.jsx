import Carousel from "../components/Carousel";
import DetailCard from "../components/DetailCard";
function BidPage() {
    return (
        <>
            <div className="flex justify-evenly items-center mt-8">
                <Carousel />
                <DetailCard />
            </div>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-title">Total Page Views</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

            </div>
        </>
    )
}

export default BidPage;