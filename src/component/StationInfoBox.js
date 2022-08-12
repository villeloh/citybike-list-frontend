import React from 'react';

export default function StationInfoBox (props) {

  const stationInfo = props.stationInfo;

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
          <td>{stationInfo.name || '-'}</td>
          <td>{stationInfo.address || '-'}</td>
          <td>{stationInfo.operator || '-'}</td>
          <td>{stationInfo.capacity || '-'}</td>
        <tr>
          <th>Trips started here</th>
          <th>Trips ended here</th>
          <th>Avg. length of started trips</th>
          <th>Avg. length of ended trips</th>
        </tr>
          <td>{stationInfo.numOfTripsFrom || '-'}</td>
          <td>{stationInfo.numOfTripsTo || '-'}</td>
          <td>{stationInfo.avgLengthOfTripFrom || '-'}</td>
          <td>{stationInfo.avgLengthOfTripTo || '-'}</td>
        </tr>
      </table> 
    </div>
  );
}