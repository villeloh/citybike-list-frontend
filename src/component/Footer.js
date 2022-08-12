import React from 'react';

export default function Footer (props) {

  const handleClick = (clickedBtn, e) => {
    e.preventDefault();

    if (clickedBtn === 'previous') {
      props.showPreviousPage();
    } else if (clickedBtn === 'next') {
      props.showNextPage();
    }
  };

  return (
    <div className="Footer">
      <button className="Footer-Btn" onClick={(e) => handleClick('previous', e)}>Previous page</button>
      <button className="Footer-Btn" onClick={(e) => handleClick('next', e)}>Next page</button>
    </div>
  );
}