import ReactScrollableList from 'react-scrollable-list';
import React from 'react';
import { PAGE_LIMIT, DEFAULT_LIST_ITEM_HEIGHT } from '../constants';

export default function StationsPage (props) {

  return (
    <div>
      <ReactScrollableList
        heightOfItem={DEFAULT_LIST_ITEM_HEIGHT}
        maxItemsToRender={PAGE_LIMIT}
        style={{ color: '#666' }}
        listItems={[{ id: 0, content: 'Hello World' }, { id: 1, content: 'Boo' }]}
      />
    </div>
  );
}