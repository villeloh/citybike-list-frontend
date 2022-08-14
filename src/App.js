import { useEffect, useState } from 'react';
import './App.css';
import StationsPage from './component/StationsPage';
import TripsPage from './component/TripsPage';
import Header from './component/Header';
import Footer from './component/Footer';
import { TRIP_ORDER, ITEMS_PER_PAGE_LIMIT } from './constants';
import { API } from './API';

function App() {

  const START_PAGE = 'trips';

  const [currentPage, setCurrentPage] = useState(START_PAGE);
  const [tripOrder, setTripOrder] = useState(TRIP_ORDER.DEFAULT);
  const [skip, setSkip] = useState(0);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {

    const fetchListItems = async () => {

      let items;
      if (currentPage === 'stations') {
  
        items = await API.getStations(skip, ITEMS_PER_PAGE_LIMIT);
      } else {
        items = await API.getTrips(skip, ITEMS_PER_PAGE_LIMIT, tripOrder);
      }
      setListItems(items);
    };
    fetchListItems();

  }, [currentPage, skip, tripOrder]);

  const showTripsPage = () => {
    setCurrentPage('trips');
  };

  const showStationsPage = () => {
    setCurrentPage('stations');
  };

  const showPreviousPage = () => {

    if (skip === 0) return;

    setSkip(skip - 1);
  };

  const showNextPage = () => {

    setSkip(skip + 1);
  };

  const selectTripOrder = (order) => {

    setTripOrder(order);
  };

  let pageToRender;

  if (currentPage === 'stations') {
    pageToRender = <StationsPage stations={listItems}/>;
  } else {
    pageToRender = <TripsPage trips={listItems} selectTripOrder={selectTripOrder}/>;
  }
  
  const pageTitle = currentPage[0].toUpperCase() + currentPage.slice(1);

  return (
    <div className="App">
      <Header pageTitle = {pageTitle} showTripsPage={showTripsPage} showStationsPage={showStationsPage}/>
      {pageToRender}
      <Footer showPreviousPage={showPreviousPage} showNextPage={showNextPage}/>
    </div>
  );
}

export default App;
