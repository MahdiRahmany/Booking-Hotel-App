import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiMinus, HiPlus, HiSearch } from "react-icons/hi";
import { useState } from "react";

function Header() {
  const [destination, setDestination] = useState("");
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem locationIcon">
          <MdLocationOn />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="Where to Go ?"
            className="searchItemInput"
            name="destination"
            id="destination"
          />
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <HiCalendar className="headerIcon dateIcon" />
          <div className="dateDropDown">2024/03/15</div>
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <div id="optionDropDown" onClick={() => setOpenOption(!openOption)}>
            {openOption && <GuestOptions options={options} />}1 adult &bull; 1
            children &bull; 1 room
          </div>
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

function GuestOptions() {
  return (
    <div className="guestOptions">
      <OptionItem />
      <OptionItem />
      <OptionItem />
    </div>
  );
}

function OptionItem() {
  return (
    <div className="guestOptionItem">
      <div className="optionText">Adult</div>
      <div className="optionCounter">
        <div className="optionCounterBtn">
          <HiMinus className="icon" />
        </div>
        <div className="optionCounterNumber">1</div>
        <div className="optionCounterBtn">
          <HiPlus className="icon" />
        </div>
      </div>
    </div>
  );
}
