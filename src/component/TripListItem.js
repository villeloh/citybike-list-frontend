import React from 'react';

export default function TripListItem (props) {

  const distInKm = parseInt(props.distance) / 1000;
  const duraInMinutes = parseInt(props.duration) / 60;

  return (
    <div className="Trip-List-Item">
       <table>
        <tr>
          <td>{props.depStationName || '-'}</td>
          <td>{props.retStationName || '-'}</td>
          <td>{distInKm || '-'}</td>
          <td>{duraInMinutes || '-'}</td>
        </tr>
      </table> 
    </div>
  );
}