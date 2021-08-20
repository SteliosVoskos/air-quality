import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Airquality from '../components/Airquality/Airquality';
import * as actions from '../actions/actions';

const mapStateToProps = ({ airquality }) => ({
    index: airquality.index,
    historicalData: airquality.historicalData,
    historicalDataError: airquality.historicalDataError,
    historicalDataPending: airquality.historicalDataPending,
    data: airquality.data,
    isAirQualityDataErroring: airquality.isAirQualityDataErroring,
    isAirQualityDataPending: airquality.isAirQualityDataPending,
    polluntantHistoricalDataError: airquality.polluntantHistoricalDataError,
    pollutantHistoricalDataPending: airquality.pollutantHistoricalDataPending,
    pollutantHistoricalData: airquality.pollutantHistoricalData,
    showPollutantGraph: airquality.showPollutantGraph
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Airquality); 