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
  useEffect(() => {

    const fetchStationInfo = async () => {

      const stationInfo = await API.getStationInfo(selectedStationId);
      setSelectedStationInfo(stationInfo);
    };
    if (selectedStationId) {
      fetchStationInfo();
    }

  }, [selectedStationId]);

  const onStationItemClick = (stationId) => {

    setSelectedStationId(stationId);
  };

  const listItems = props.stations?.filter(station => typeof(station.stationId) === 'number').map(station => {
    return { id: station.stationId, content: <StationListItem station={station} handleClick={onStationItemClick}/>};
  });

  // won't work directly due to the '&' sign (I'm sure there is some way of escaping it)
  const nameField = 'Name & ';

  return (
    <div className="Stations-Page-Container">
      <div className="Stations-List-Container">     
        <table className="Stations-List-Legend-Box">
            <tbody>
              <tr>
                <th>{nameField}</th>
                <th>Address</th>
              </tr>
            </tbody>
        </table>
        <div className="Stations-List">
          <ReactScrollableList
            heightOfItem={DEFAULT_LIST_ITEM_HEIGHT}
            maxItemsToRender={ITEMS_PER_PAGE_LIMIT}
            listItems={listItems}
          />
        </div>
      </div>
      <StationInfoBox stationInfo={selectedStationInfo}/>
    </div>
  );
}