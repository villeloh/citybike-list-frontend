import React from 'react';

export default function Header (props) {

  const handleClick = (selectedPage, e) => {
    e.preventDefault();

    // clumsy, but it works for 2 buttons
    if (selectedPage === 'trips') {
      props.showTripsPage();
    } else if (selectedPage === 'stations') {
      props.showStationsPage();
    }
  };

  return (
    <div className="Header">
      <button className="Header-Btn" onClick={(e) => handleClick('trips', e)}>Trips</button>
      <button className="Header-Btn" onClick={(e) => handleClick('stations', e)}>Stations</button>
      <h1>{props.pageTitle || ''}</h1>
    </div>
  );
}