import React from 'react';

export default function StationListItem (props) {

  const station = props.station;

  return (
    <div className="Station-List-Item" onClick={() => props.handleClick(station.stationId)}>
       <table className="Station-List-Item-Table">
        <tbody>
          <tr>
            <td className="Station-List-Item-Cell">{station.nameFinnish || ''}</td>
            <td className="Station-List-Item-Cell">{station.addressFinnish || ''}</td>
        </tr>
        </tbody>
      </table> 
    </div>
  );
}