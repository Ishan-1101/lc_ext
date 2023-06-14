import React from 'react'
import '../Style/Contest.css';

const Contest = ({name, url, starts_in}) => {
  return (
    <div className="wrapper">

      <div className="card-container">

        <div className="image-container">
          <img src="https://assets.leetcode.com/contest/weekly-contest-290/card_img_1654267980.png" />
        </div>

        <div className="card-content">
          <div className="card-title">
            <h3>{name}</h3>
          </div>
          <div className="card-body">
            <p>Starts in less than 24 hours ? {starts_in}</p>
          </div>
        </div>

        <div className="btn">
          <button>
            <a href={url}>Register</a>
          </button>
        </div>

      </div>

    </div>
  );
}

export default Contest