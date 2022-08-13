import { BASE_URL, STATIONS_URL, TRIPS_URL, STATION_INFO_URL } from './constants';

const OPTIONS = {
  method: 'GET',
  mode: 'cors',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  }
};

const buildQueryURL = (endpointPath, queryParams) => {

  return BASE_URL + endpointPath + '?' + new URLSearchParams(queryParams);
};

const sendRequest = async (endpointUrl, queryParams, errorMsg) => {

  try {
    const res = await fetch(buildQueryURL(endpointUrl, queryParams), OPTIONS);

    if (res.ok) {
      return await res.json();
    } else {
      console.error(res.status + ': ' + errorMsg);
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Not every endpoint is used (I ran out of time for delete / add operations, 
// although they do exist on the server.)
export const API = {

  getStations: async (skip, limit) => {

    const queryParams = { 
      skip: skip,
      limit: limit
    };

    const errorMsg = 'Error fetching stations.';

    return await sendRequest(STATIONS_URL, queryParams, errorMsg);
  },
  
  getTrips: async (skip, limit, order) => {

    const queryParams = { 
      skip: skip,
      limit: limit,
      order: order
    };

    const errorMsg = 'Error fetching trips.';

    return await sendRequest(TRIPS_URL, queryParams, errorMsg);
  },
  
  getStationInfo: async (stationId) => {

    const queryParams = { 
      stationId: stationId
    };

    const errorMsg = 'Error fetching station info.';

    return await sendRequest(STATION_INFO_URL, queryParams, errorMsg);
  }
};
