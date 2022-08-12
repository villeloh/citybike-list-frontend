import React from 'react';

export default function StationListItem (props) {

  const station = props.station;

  return (
    <div className="Station-List-Item" onClick={() => props.handleClick(station.stationId)}>
       <table>
        <tr>
          <td>{station.name || ''}</td>
          <td>{station.address || ''}</td>
        </tr>
      </table> 
    </div>
  );
}