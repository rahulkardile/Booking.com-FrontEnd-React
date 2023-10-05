import "./Header.css"
import { faBed, faCalendarDays, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from "date-fns"
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openOptions, setOpenoption] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    childern: 0,
    room: 1
  });

  const navigate = useNavigate()

  const handleOptions = (name, opration) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: opration === "i" ? options[name] + 1 : options[name] - 1
      }
    })
  }

  const handleSearch = () =>{
    navigate("/hotels", { state: { destination, date, options }})
  }

  return (
    <div className='header'>
      <div className={ type === "list" ? "headerContainer listMode" : "headerContainer" }>
        <div className="headerList">

          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attrations</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>

        </div>
      { type !== "list" &&
       <> 
        <h1 className="headerTitle">
          A lifetime of discounts? its Genius
        </h1>
        <p className="headerDesc">Get rewarded for your travel - unlock instant saving of 10% or more with a free lala booking account</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going"
              onChange={e => setDestination(e.target.value)}
              className="headerSearchInput" />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText"> {`${format(date[0].startDate, "mm/dd/yyyy")} to ${format(date[0].endDate, "mm/dd/yyyy")}`} </span>
            {openDate && <DateRange
              className="date"
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />}
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=> setOpenoption(!openOptions)} className="headerSearchText">{`${options.adult} adult , ${options.childern} children , ${options.room} `}</span>
            { openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionsText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton" onClick={() => handleOptions("adult", "d")}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions("adult", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionsText">Childern</span>
                <div className="optionCounter">
                  <button
                    disabled={options.childern <= 0}
                    className="optionCounterButton" onClick={() => handleOptions("childern", "d")}>-</button>
                  <span className="optionCounterNumber">{options.childern}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions("childern", "i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionsText">Room</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterButton" onClick={() => handleOptions("room", "d")}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button className="optionCounterButton" onClick={() => handleOptions("room", "i")}>+</button>
                </div>
              </div>
            </div> }
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div> </>}
      </div>
    </div>
  )
}

export default Header