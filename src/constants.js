export const ITEMS_PER_PAGE_LIMIT = 20;
export const DEFAULT_LIST_ITEM_HEIGHT = 30;

export const BASE_URL = 'http://localhost:3000';
export const STATIONS_URL = '/stations';
export const TRIPS_URL = '/trips';
export const STATION_INFO_URL = '/station';

export const TRIP_ORDER = {
  DEFAULT: 'default',
  DEP_FROM_ASC: 'dep_from_asc',
  RET_TO_ASC: 'ret_to_asc',
  DISTANCE_ASC: 'distance_asc',
  DURATION_ASC: 'duration_asc',
  DEP_FROM_DESC: 'dep_from_desc',
  RET_TO_DESC: 'ret_to_desc',
  DISTANCE_DESC: 'distance_desc',
  DURATION_DESC: 'duration_desc'
};