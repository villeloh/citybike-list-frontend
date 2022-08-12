import React from 'react';

export default function StationInfoBox (props) {

  return (
    <div className="Station-Info-Box">
      <table>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Operator</th>
          <th>Capacity</th>
        </tr>
        <tr>
          <td>{props.name || '-'}</td>
          <td>{props.address || '-'}</td>
          <td>{props.operator || '-'}</td>
          <td>{props.capacity || '-'}</td>
        <tr>
          <th>Trips started here</th>
          <th>Trips ended here</th>
          <th>Avg. length of started trips</th>
          <th>Avg. length of ended trips</th>
        </tr>
          <td>{props.numOfTripsFrom || '-'}</td>
          <td>{props.numOfTripsTo || '-'}</td>
          <td>{props.avgLengthOfTripFrom || '-'}</td>
          <td>{props.avgLengthOfTripTo || '-'}</td>
        </tr>
      </table> 
    </div>
  );
}