import styled from 'styled-components';
function assignColor(prop) {
    if (prop.indicator === 'Low') {
        return '#28a745';
    } else if (prop.indicator === 'Moderate') {
        return '#ffc107';
    } else {
        return '#dc3545';
    }
}

export const Container = styled.div`
    font-family: "Sen", sans-serif;
    width: 100%
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em;
`;

export const AirQualityContainer = styled.div`
    width: ${props => props.showPollutantGraph === true ? '40%' : '20%'};
    transition: ${props => props.showPollutantGraph === true ? '1s' : '0'};
    margin: 0 auto;
    height: auto;
    padding: 1em 1em 0 1em;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.7);
    border: trasparent;
    border-radius: 10px;
    font-weight: 300;
    margin-top: 1em;
    position: relative;
`;

export const AirqualityValuesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        font-weight: 500;
    }
`;

export const PollutantValue = styled.p`
    text-align: center;
    margin: 0 auto;
    color: ${prop => assignColor(prop)} !important;
`;

export const PollutantLink = styled.a`
    font-size: 1em;
    width: 26px;
    height: 20px;
    color: #6c757d;
    border: 1px solid #6c757d;
    border-radius: 50%;
    text-align: center;
    padding-bottom: 24px;

    &:hover {
        color: #6c757d;
        text-decoration: none;
    }
`

export const Indicator = styled.div`
    background-color: ${prop => assignColor(prop)};
    font-size: 1em;
    font-weight: 500;
    color: white;
    margin: 1em;
    padding: 0 1em;
    text-align: center;
    border: transparent;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const IndicatorValue = styled.p`
    margin: .3em 0;
`

export const StationName = styled.h3`
    text-align: center;
`

export const NavigationCTA = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 1px solid #f8f9fa;
    position: absolute;
    background-color: rgba(255,255,255, 0.5);
`;

export const NextCardCTA = styled(NavigationCTA)`
    right: -15px;
    top: 50%;
`;

export const PreviousCardCTA = styled(NavigationCTA)`
    left: -15px;
    top: 50%;
`;

export const HistoricalDataGraphContainer = styled.div`
    height: auto;
    width: 40%;
    margin-top: -10em;
    background-color: rgba(255, 255, 255, 0.7);
`;