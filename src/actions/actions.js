import * as actionType from './actionTypes';

export function fetchAirQualityDataPending() {
    return {
        type: actionType.FETCH_AIR_QUALITY_DATA_PENDING
    };
}

export function fetchAirQualityDataSuccess(data) {
    return {
        type: actionType.FETCH_AIR_QUALITY_DATA_SUCCESS,
        data
    };
}

export function fetchAirQualityDataError(error) {
    return {
        type: actionType.FETCH_AIR_QUALITY_DATA_ERROR,
        error
    };
}

export function fetchHistoricalDataForPollutantPending() {
    return {
        type: actionType.FETCH_HISTORICAL_DATA_FOR_POLLUTANT_PENDING
    };
}

export function fetchHistoricalDataForPollutantSuccess(data) {
    return {
        type: actionType.FETCH_HISTORICAL_DATA_FOR_POLLUTANT_SUCCESS,
        data
    };
}

export function fetchHistoricalDataForPollutantError() {
    return {
        type: actionType.FETCH_HISTORICAL_DATA_FOR_POLLUTANT_ERROR
    };
}

export function fetchAirqualityHistoricalDataForPollutant() {
    return (dispatch) => {
        dispatch(fetchHistoricalDataForPollutantPending())
        fetch('test')
            .then(data => data.json())
            .then(response => dispatch(fetchHistoricalDataForPollutantSuccess(response)))
            .catch(error => {
                dispatch(fetchHistoricalDataForPollutantError());
                return error;
            })
    }
}

export function fetchAirQualityData() {
    return dispatch => {
        dispatch(fetchAirQualityDataPending())
        fetch('http://inicosia.rise.org.cy/docs/Airquality/0.1/airquality/live')
            .then(data => data.json())
            .then(response => dispatch(fetchAirQualityDataSuccess(response)))
            .catch(error => console.log(error))
    }
}