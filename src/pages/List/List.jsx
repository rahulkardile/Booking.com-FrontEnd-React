import Navbar from "../../components/Navbar/Navbar.jsx"
import Header from "../../components/Header/Header.jsx"
import "./List.css"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/SearchItem/SearchItem.jsx"

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false)

  // console.log(options.Childern);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <lable className="itemLable">Destination</lable>
              <input placeholder={destination} type="text" />
            </div>

            <div className="lsItem">
              <lable className="itemLable">Check-in Date</lable>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

              {openDate && <DateRange
                onChange={(item) => setDate([item.selection])}
                ranges={date}
                minDate={new Date()}
              />}
            </div>

            <div className="lsItem">
              <lable className="itemLable">Options</lable>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price <small>per night</small></span>
                  <input type="number" name="" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max price <small>per night</small></span>
                  <input type="number" name="" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} name="" placeholder={options.adult} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} name="" placeholder={options.childern} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} name="" placeholder={options.room} className="lsOptionInput" />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />

          </div>
        </div>
      </div>
    </div>
  )
}

export default List