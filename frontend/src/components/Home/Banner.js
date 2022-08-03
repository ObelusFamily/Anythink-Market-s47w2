import React, { useState } from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = ({ onSearch, search }) => {
  const [isShowSearch, setShowSearch] = useState(false);

  const onInput = (event) => {
    const newSearch = event.currentTarget.value;

    onSearch(
      newSearch,
      (page) => agent.Items.byTitle(newSearch, page),
      agent.Items.byTitle(newSearch)
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          A place to
          <span id="get-part" onClick={setShowSearch.bind(null, true)}>
            get
          </span>
          {isShowSearch && (
            <input
              id="search-box"
              placeholder="What is it that you truly desire?"
              value={search}
              onInput={onInput}
            />
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
