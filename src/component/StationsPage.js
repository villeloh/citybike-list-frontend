import ReactScrollableList from 'react-scrollable-list';
import React, { useEffect, useState } from 'react';
import { ITEMS_PER_PAGE_LIMIT, DEFAULT_LIST_ITEM_HEIGHT } from '../constants';
import StationListItem from './StationListItem';
import StationInfoBox from './StationInfoBox';
import { API } from '../API';

export default function StationsPage (props) {

  const [selectedStationId, setSelectedStationId] = useState(null);
  const [selectedStationInfo, setSelectedStationInfo] = useState({});

  // It's a bit inconsistent to fetch Trips and Stations in App and StationInfo here;
  // I'm not sure if it being triggered by clicking a station justifies this.
  // Otoh passing the selectedStationId up to App seems too convoluted.
  // Could've possibly used Context to make the state management a bit neater.
  useEffect(async () => {

    const stationInfo = await API.getStationInfo(selectedStationId);
    setSelectedStationInfo(stationInfo);
  }, [selectedStationId]);

  const onStationItemClick = (stationId) => {

    setSelectedStationId(stationId);
  };

  const listItems = props.stations?.map(station => {
    return { id: station.stationId, content: <StationListItem station={station} handleClick={onStationItemClick}/>};
  });

  return (
    <div className="Stations-Page">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </tbody>
      </table>
      <ReactScrollableList
        heightOfItem={DEFAULT_LIST_ITEM_HEIGHT}
        maxItemsToRender={ITEMS_PER_PAGE_LIMIT}
        style={{ color: '#666' }}
        listItems={listItems}
      />
      <StationInfoBox stationInfo={selectedStationInfo}/>
    </div>
  );
}