import "./FeaturedProperties.css"

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img className="fpImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Syig8WuPrcxotON3J55_EMCju3NrPzr_mA&usqp=CAU" alt="" />
                <span className="fpName">Aparthotel Stare Miasto</span>
                <span className="fpCity">Goa</span>
                <span className="fpPrice">Starting From $120</span>
                <div className="fpRating">
                    <button >7.5</button>
                    <span>Exellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpbMk5x1koT_GGmDo-QqRPMcXey2bddyr5Q&usqp=CAU" alt="" />
                <span className="fpName">Deo La Neo</span>
                <span className="fpCity">Delhi</span>
                <span className="fpPrice">Starting From $130</span>
                <div className="fpRating">
                    <button >7.5</button>
                    <span>Exellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUX5ctuLkGx9leHLzf1Go0apYZGzLUP2N8_lcl0t6my9zUCe22gEVX2jW0MiJfv6A69hw&usqp=CAU" alt="" />
                <span className="fpName">New Jurcy Apa</span>
                <span className="fpCity">NewJusrcy</span>
                <span className="fpPrice">Starting From $220</span>
                <div className="fpRating">
                    <button >7.5</button>
                    <span>Exellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/320328264.jpg?k=5cbf02db753718481e7957f36f2c1a1154b65855e4fa04fc8a7fb699347d3127&o=&hp=1" alt="" />
                <span className="fpName">Juhu Goa</span>
                <span className="fpCity">Goa</span>
                <span className="fpPrice">Starting From $100</span>
                <div className="fpRating">
                    <button >7.5</button>
                    <span>Exellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/118810099.jpg?k=9b8f8794f5a8364957a3752fafd2645020ccb0510b3b730bed13c9a86ea15300&o=&hp=1" alt="" />
                <span className="fpName">Stare Miasto</span>
                <span className="fpCity">Delhi</span>
                <span className="fpPrice">Starting From $130</span>
                <div className="fpRating">
                    <button >7.5</button>
                    <span>Exellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties