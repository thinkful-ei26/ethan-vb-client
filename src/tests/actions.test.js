import {fetchTripsSuccess, FETCH_TRIPS_SUCCESS, fetchTripsError, FETCH_TRIPS_ERROR} from '../actions/trips';

describe('fetch trips', () => {
  it('should return trip data', () => {
    const data = {
      id: '111111111111111111111101',
      name: 'tom',
      selectedOptions: ['skiing', 'breweries'],
      duration: 9,
      suggestions: ['denver']
    };
    const action = fetchTripsSuccess(data);
    expect(action).toEqual({
      type: FETCH_TRIPS_SUCCESS,
      data
    });
  });
  it('should return an error', () => {
    const error = 123;
    const action = fetchTripsError(error);
    expect(action).toEqual({
      type: FETCH_TRIPS_ERROR,
      error
    });
  });
});