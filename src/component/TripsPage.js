import ReactScrollableList from 'react-scrollable-list';
import TripListItem from './TripListItem';
import React, { useState } from 'react';
import { ITEMS_PER_PAGE_LIMIT, DEFAULT_LIST_ITEM_HEIGHT, TRIP_ORDER } from '../constants';

export default function TripsPage (props) {

  const [ascTripOrder, setAscTripOrder] = useState(false);

  const selectTripOrder = props.selectTripOrder;
  
  // alternative to switch statement
  const headerFuncs = { 
    from: (isAsc) => { isAsc ? selectTripOrder(TRIP_ORDER.DEP_FROM_ASC) : selectTripOrder(TRIP_ORDER.DEP_FROM_DESC)}, 
    to: (isAsc) => { isAsc ? selectTripOrder(TRIP_ORDER.RET_TO_ASC) : selectTripOrder(TRIP_ORDER.RET_TO_DESC)}, 
    dist: (isAsc) => { isAsc ? selectTripOrder(TRIP_ORDER.DISTANCE_ASC) : selectTripOrder(TRIP_ORDER.DISTANCE_DESC)}, 
    dura: (isAsc) => { isAsc ? selectTripOrder(TRIP_ORDER.DURATION_ASC) : selectTripOrder(TRIP_ORDER.DURATION_DESC)},
    default: () => selectTripOrder(TRIP_ORDER.DEFAULT)
  };

  const onHeaderClick = (header) => {

    setAscTripOrder(!ascTripOrder);
    headerFuncs[header](ascTripOrder);
  };

  const trips = props.trips || [];

  const listItems = trips.map(trip => {
    return { id: trip._id, content: <TripListItem trip={trip}/>};
  });

  return (
    <div className="Trips-Page">
      <table>
        <tbody>
          <tr>
            <th onClick={() => onHeaderClick('from')}>Started from</th>
            <th onClick={() => onHeaderClick('to')}>Ended at</th>
            <th onClick={() => onHeaderClick('dist')}>Distance (km)</th>
            <th onClick={() => onHeaderClick('dura')}>Duration (minutes)</th>
          </tr>
        </tbody>
      </table>
      <ReactScrollableList
        heightOfItem={DEFAULT_LIST_ITEM_HEIGHT}
        maxItemsToRender={ITEMS_PER_PAGE_LIMIT}
        style={{ color: '#333' }}
        listItems={listItems}
      />
    </div>
  );
}