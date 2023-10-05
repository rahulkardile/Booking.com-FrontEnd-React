import "./Hotel.css"
import Navbar from "../../components/Navbar/Navbar.jsx"
import Header from "../../components/Header/Header.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleCheck, faCircleXmark, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/MailList/MailList.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import { useState } from "react"

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false);

  var objArr = [
    {
      name: 'john',
      age: 12,
      gender: 'male'
    },
    {
      name: 'jane',
      age: 15,
      gender: 'female'
    },
    {
      name: 'julie',
      age: 20,
      gender: 'trans'
    }
  ];

  // console.log(objArr[1].name);

  const photos = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-EirR7vbRongPHyMHa3iM8FQuKosc1fyWQ&usqp=CAU"
    },
    {
      // id: 2,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/494683266.jpg?k=080a2b617d519fc87b459dfe279c98cb25f6de5e9e140022a441c603f2b2537b&o=&hp=1"
    },
    {
      // id: 3,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/494683494.jpg?k=0f01b8a37b3a16a6745ea7768d2fa33e0e2e5ce710c5ae313aa6672ab76da127&o=&hp=1"
    },
    {
      // id: 4,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/494683692.jpg?k=8f435d59dd18572af0956da5b8f26ddd189f4b6987e9685daf848ad3a92ce94f&o=&hp=1"
    },
    {
      // id: 5,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/494683894.jpg?k=00d6d55b6085a500e5837069cb79bec8b625a06a74613316257bba9bfb45ef43&o=&hp=1"
    },
    {
      // id: 6,
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/494684028.jpg?k=32e5e824e48bdffff2d906307b406598baa4b93585af379c5df1dc6164689c3e&o=&hp=1"
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);

  }

const handleArrow = (direction) =>{
  let newSlideNumber;

  if(direction === "l"){
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
  }else {
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1

  }

  setSlideNumber(newSlideNumber)

}

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer1">
        {open && <div className="slider">

          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleArrow("l")}/>
          <div className="sliderWrapper">
            <img 
            src={photos[slideNumber].src}
             alt=""
             className="sliderImg"
             />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleArrow("r")} />

        </div>}
        <div className="hotelWrapper1">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel