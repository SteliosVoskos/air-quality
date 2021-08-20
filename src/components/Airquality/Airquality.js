import { useEffect } from 'react';
import AnimatedNumber from "animated-number-react";
import { Helmet } from 'react-helmet';
import Heatmap from './Heatmap';
import { AirqualityValuesContainer, Container, Indicator, IndicatorValue, PollutantName, Pulser, PollutantValue, PollutantLink, StationName, TrasparentLayer, AirQualityContainer } from './Airquality.styles';
const Airquality = (props) => {
    useEffect(() => {
        props.fetchAirQualityData();
    }, []);

    if (!props.data || props.data.length === 0) {
        return <span>...</span>
    }
    const formatValue = (value) => value.toFixed(2);
    const renderPollutionStatus = (data) => {
        return (
            <Indicator indicator={data[0].properties.pollutants.find(pollutant => pollutant.code === "6001").category}>
                <IndicatorValue>
                    {data[0].properties.pollutants.find(pollutant => pollutant.code === "6001").category}
                    <br />
                    <AnimatedNumber
                        value={Number(data[0].properties.pollutants.find(pollutant => pollutant.code === "6001").value).toFixed(2)}
                        formatValue={formatValue}
                    />
                    {" "}µg/m3
                </IndicatorValue>
            </Indicator>
        )
    }
    console.log(props.data)
    return (
        <Container>
            <Helmet>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            </Helmet>
            <TrasparentLayer>
                <Heatmap />
                <AirQualityContainer>
                    <Pulser />
                    <StationName>{props.data[0].description}</StationName>
                    {renderPollutionStatus(props.data)}
                    {props.data[0].properties.pollutants.map(pollutant => {
                        return (
                            <AirqualityValuesContainer key={pollutant.code}>
                                <PollutantName>{pollutant.name}</PollutantName>
                                <PollutantValue indicator={pollutant.category}>{Number(pollutant.value).toFixed(2)}</PollutantValue>
                                <PollutantLink href={pollutant.description}>&#8505;</PollutantLink>
                            </AirqualityValuesContainer>
                        )
                    })}
                </AirQualityContainer>
            </TrasparentLayer>
        </Container>
    )
};

export default Airquality;