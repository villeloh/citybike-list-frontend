import ReactScrollableList from 'react-scrollable-list';
import TripListItem from './TripListItem';
import React from 'react';
import { ITEMS_PER_PAGE_LIMIT, DEFAULT_LIST_ITEM_HEIGHT } from '../constants';

export default function TripsPage (props) {

  const listItems = props.trips.map(trip => {
    return { id: trip._id, content: <TripListItem />};
  });

  return (
    <div>
      <ReactScrollableList
        heightOfItem={DEFAULT_LIST_ITEM_HEIGHT}
        maxItemsToRender={ITEMS_PER_PAGE_LIMIT}
        style={{ color: '#333' }}
        listItems={listItems}
      />
    </div>
  );
}