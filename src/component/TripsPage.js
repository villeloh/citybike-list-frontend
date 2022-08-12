import { ReactScrollableList } from 'react-scrollable-list';
import React, { Component } from 'react';
import { PAGE_LIMIT, DEFAULT_LIST_ITEM_HEIGHT } from '../constants';

function TripsPage (props) {

  return (
    <div>
      <ReactScrollableList
        heightOfItem={DEFAULT_LIST_ITEM_HEIGHT}
        maxItemsToRender={PAGE_LIMIT}
        style={{ color: '#333' }}
        listItems={[{ id: 0, content: 0 }]}
      />
    </div>
  );
}