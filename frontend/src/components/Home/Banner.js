import React from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const onInput = (event) => {
    let search = event.currentTarget.value;

    if (search.length < 3) {
      search = undefined;
    }

    props.onSearch(
      search,
      (page) => agent.Items.byTitle(search, page),
      agent.Items.byTitle(search)
    );
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            id="search-box"
            placeholder="What is it that you truly desire?"
            onInput={onInput}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
