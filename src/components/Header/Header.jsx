import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiMinus, HiPlus, HiSearch } from "react-icons/hi";
import { useState } from "react";

function Header() {
  const [destination, setDestination] = useState("");
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

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
            className="headerSearchInput"
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
            {options.Adult} Adult &bull; {options.Children} Children &bull;{" "}
            {options.Room} Room
          </div>
          {openOption && (
            <GuestOptions handleOptions={handleOptions} options={options} />
          )}
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

function GuestOptions({ options, handleOptions }) {
  return (
    <div className="guestOptions">
      <OptionItem
        type="Adult"
        options={options}
        minLimit={1}
        handleOptions={handleOptions}
      />
      <OptionItem
        type="Children"
        options={options}
        minLimit={0}
        handleOptions={handleOptions}
      />
      <OptionItem
        type="Room"
        options={options}
        minLimit={1}
        handleOptions={handleOptions}
      />
    </div>
  );
}

function OptionItem({ options, type, minLimit, handleOptions }) {
  return (
    <div className="guestOptionItem">
      <div className="optionText">{type}</div>
      <div className="optionCounter">
        <button
          onClick={() => handleOptions(type, "dec")}
          className="optionCounterBtn"
          disabled={options[type] <= minLimit}
        >
          <HiMinus className="icon" />
        </button>

        <span className="optionCounterNumber">{options[type]}</span>
        <button
          className="optionCounterBtn"
          onClick={() => handleOptions(type, "inc")}
        >
          <HiPlus className="icon" />
        </button>
      </div>
    </div>
  );
}
