import React from 'react';
// import PropTypes from 'prop-types';
import style from './Card.scss';
import location from '../../img/location-placeholder.svg';
import weather from '../../img/weather-placeholder.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // location: this.props.location,
    };
  }
  componentDidMount() {
    this.state = null;
  }

  getLocation() {
    // call html5 api to get user location and set state
    this.setState({});
  }

  render() {
    return (
      <div className={style.Card}>
        <div className={style.topBar}>
          <div className={style.locationWrapper}>
            <img className="locationIcon" src={location} alt="location-icon" />
            <span className="locationText">Rome, Italy</span>
          </div>
          <div className={style.temperatureWrapper}>
            <span className="temperatureText">
              54°c
            </span>
          </div>
        </div>
        <div className="weatherContent">
          <div className="weatherText">
            Sunny
          </div>
          <div className="weatherIconWrapper">
            <img className="weatherIcon" src={weather} alt="weather-icon" />
          </div>
        </div>
        <div className="bottomBar">
          <div className="humidityWrapper">
            <span className="umidityText">
              48% umidità
            </span>
          </div>
          <div className="windWrapper">
            <span className="windText">
              46 nodi
            </span>
          </div>
        </div>
        <div className="calendarBar">
          <div className="calendarDay">
            <span className="calendarText">
              Mon
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Tue
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Wed
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Thu
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Fri
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Sat
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Sun
            </span>
          </div>
        </div>
      </div>
    );
  }
}

/* App.propTypes = {
          location: PropTypes.string,
};

App.defaultProps = {
          location: 'Rome, Italy',
}; */

export default App;
