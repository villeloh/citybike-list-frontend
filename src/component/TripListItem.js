import React from 'react';

export default function TripListItem (props) {

  const trip = props.trip;

  const distInKm = (parseInt(trip.distance) / 1000).toFixed(1);
  const duraInMinutes = (parseInt(trip.duration) / 60).toFixed(1);

  return (
    <div className="Trip-List-Item">
       <table>
        <tbody>
          <tr>
            <td className="Trip-List-Item-Cell">{trip.depStationName || '-'}</td>
            <td className="Trip-List-Item-Cell">{trip.retStationName || '-'}</td>
            <td className="Trip-List-Item-Cell">{distInKm + ' km' || '-'}</td>
            <td className="Trip-List-Item-Cell">{duraInMinutes + ' min.' || '-'}</td>
          </tr>
        </tbody>
      </table> 
    </div>
  );
}