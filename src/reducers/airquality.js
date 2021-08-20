import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    index: 0,
    historicalData: {},
    historicalDataError: false,
    historicalDataPending: false,
    data: [],
    isAirQualityDataErroring: false,
    isAirQualityDataPending: false,
    polluntantHistoricalDataError: false,
    pollutantHistoricalDataPending: false,
    pollutantHistoricalData: null,
    showPollutantGraph: false
};

const airquality = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_GRAPH:
            return {
                ...state,
                showPollutantGraph: true
            };
        case actionTypes.FETCH_HISTORICAL_DATA_FOR_POLLUTANT_PENDING:
            return {
                ...state,
                pollutantHistoricalData: null,
                polluntantHistoricalDataError: false,
                pollutantHistoricalDataPending: true
            };
        case actionTypes.FETCH_HISTORICAL_DATA_FOR_POLLUTANT_SUCCESS:
            return {
                ...state,
                pollutantHistoricalData: action.data,
                polluntantHistoricalDataError: false,
                pollutantHistoricalDataPending: false
            };
        case actionTypes.FETCH_HISTORICAL_DATA_FOR_POLLUTANT_ERROR:
            return {
                ...state,
                pollutantHistoricalData: null,
                polluntantHistoricalDataError: true,
                pollutantHistoricalDataPending: false
            };
        case actionTypes.FETCH_AIR_QUALITY_HISTORICAL_DATA_PENDING:
            return {
                ...state,
                historicalDataPending: true
            };
        case actionTypes.FETCH_AIR_QUALITY_HISTORICAL_DATA_SUCCESS:
            return {
                ...state,
                historicalData: action.data,
                historicalDataPending: false
            };
        case actionTypes.FETCH_AIR_QUALITY_HISTORICAL_DATA_ERROR:
            return {
                ...state,
                historicalData: {},
                historicalDataError: true,
                historicalDataPending: false
            };
        case actionTypes.FETCH_AIR_QUALITY_DATA_PENDING:
            return Object.assign({}, state, {
                data: [],
                isAirQualityDataErroring: false,
                isAirQualityDataPending: true
            });
        case actionTypes.FETCH_AIR_QUALITY_DATA_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                isAirQualityDataErroring: false,
                isAirQualityDataPending: false
            });
        case actionTypes.FETCH_AIR_QUALITY_DATA_ERROR:
            return Object.assign({}, state, {
                data: [],
                isAirQualityDataErroring: true,
                isAirQualityDataPending: false
            });
        case actionTypes.NEXT_CARD:
            return {
                ...state,
                index: state.index + 1
            };
        case actionTypes.PREVIEWS_CARD:
            return {
                ...state,
                index: state.index - 1
            };
        default:
            return state;
    }
}

export default airquality;