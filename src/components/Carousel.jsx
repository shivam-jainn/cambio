
import shoe1 from '/assets/shoe1.jpg';
import shoe2 from '/assets/shoe2.jpg';
import shoe3 from '/assets/shoe3.jpg';
import shoe4 from '/assets/shoe4.jpg';
import shoe5 from '/assets/shoe5.jpg';

function Carousel() {
    return (
        <div className="carousel w-1/2 h-[550px] m-12 relative overflow-hidden">
            <div id="slide1" className="carousel-item w-full h-full relative">
                <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${shoe1})` }}>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item w-full h-full relative">
                <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${shoe2})` }}>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item w-full h-full relative">
                <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${shoe3})` }}>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item w-full h-full relative">
                <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${shoe4})` }}>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item w-full h-full relative">
                <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: `url(${shoe5})` }}>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;