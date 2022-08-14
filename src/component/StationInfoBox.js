import React from 'react';

export default function StationInfoBox (props) {

  const stationInfo = props.stationInfo;

  const avgLengthOfTripFrom = typeof(stationInfo.avgLengthOfTripFrom) === 'number' 
  ? (stationInfo.avgLengthOfTripFrom / 1000).toFixed(1) + ' km' 
  : '-';

  const avgLengthOfTripTo = typeof(stationInfo.avgLengthOfTripTo) === 'number' 
  ? (stationInfo.avgLengthOfTripTo / 1000).toFixed(1) + ' km'
  : '-';

  const capacity = stationInfo.capacity ? stationInfo.capacity + ' bikes' : '-';

  // Adding a header with the text 'STATIONS' proved an insurmountable task due to hurry + CSS issues...
  return (
    <div className="Station-Info-Box">
      <table>
        <tbody>
          <tr>
            <th className="Station-Info-Box-Cell">Name</th>
            <th className="Station-Info-Box-Cell">Address</th>
            <th className="Station-Info-Box-Cell">Operator</th>
            <th className="Station-Info-Box-Cell">Capacity</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{stationInfo.name || '-'}</td>
            <td>{stationInfo.address || '-'}</td>
            <td>{stationInfo.operator || '-'}</td>
            <td>{capacity}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className="Station-Info-Box-Cell">Trips started here</th>
            <th className="Station-Info-Box-Cell">Trips ended here</th>
            <th className="Station-Info-Box-Cell">Avg. length of started trips</th>
            <th className="Station-Info-Box-Cell">Avg. length of ended trips</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{stationInfo.numOfTripsFrom || '-'}</td>
            <td>{stationInfo.numOfTripsTo || '-'}</td>
            <td>{avgLengthOfTripFrom}</td>
            <td>{avgLengthOfTripTo}</td>
          </tr>
        </tbody>
      </table> 
    </div>
  );
}