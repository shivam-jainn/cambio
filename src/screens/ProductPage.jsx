
import Carousel from "../components/Carousel";
import DetailCard from "../components/DetailCard";
import ProductCard from "../components/ProductCard";
function ProductPage() {
    return (
        <>
            <div className="flex justify-evenly items-center mt-8">
                <Carousel />
                <DetailCard />
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