import React from 'react';

export default function TripListItem (props) {

  const trip = props.trip;

  const distInKm = parseInt(trip.distance) / 1000;
  const duraInMinutes = parseInt(trip.duration) / 60;

  return (
    <div className="Trip-List-Item">
       <table>
        <tbody>
          <tr>
            <td>{trip.depStationName || '-'}</td>
            <td>{trip.retStationName || '-'}</td>
            <td>{distInKm + ' km' || '-'}</td>
            <td>{duraInMinutes + ' min.' || '-'}</td>
          </tr>
        </tbody>
      </table> 
    </div>
  );
}