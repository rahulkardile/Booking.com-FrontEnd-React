import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img 
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-EirR7vbRongPHyMHa3iM8FQuKosc1fyWQ&usqp=CAU" 
        className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartment</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment With Air Conditioning</span>
            <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
            <span className="siCancelOp">Free Cancelation</span>
            <span className="siCancelOpSubTitle">You can cancel latter, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRatings">
                <span>Excellence</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$233</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem