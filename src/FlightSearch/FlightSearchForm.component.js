import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import HomeCard from '../Home/HomeCard';
import FlightDescriptions from '../FlightDescription/FlightDescipt.component';
import WhyBookUsComponent from '../WhyBookUs/WhyBookUs.Component';
import TripIdeasComponent from '../Tripideas/TripIdeas.component';
import '../Styles/Search.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchParams, setFlights } from '../Slices/Flight.Slice';

const FlightSearchForm = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [cabinClass, setCabinClass] = useState('economy');
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [showTravelers, setShowTravelers] = useState(false);

  const handleCabinClassClick = () => {
    setShowTravelers(prev => !prev);
  };
const formatDate = (date) => {
  if (!date) return null;
  const d = new Date(date);
  const month = '' + (d.getMonth() + 1);
  const day = '' + d.getDate();
  const year = d.getFullYear();

  return [year, month.padStart(2, '0'), day.padStart(2, '0')].join('-');
};

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchParams = {
     source,
  destination,
  departureDate: formatDate(departureDate),
  returnDate: formatDate(returnDate),
  cabinClass,
  adults: adultCount,
  children: childCount
    };

    console.log('Search parameters:', searchParams);

    try {
      const response = await axios.post('http://localhost:2222/flight/search', searchParams);
      dispatch(setSearchParams(searchParams));
      dispatch(setFlights(response.data));
      console.log('API response:', response.data);
      // Handle successful response (e.g., navigate, display results)
    navigate('flights-available', {
  state: {
    searchParams,
    flights: response.data
  }
});
    } catch (error) {
      console.error('API error:', error);
      // Show error to user
    }
  };

  return (
    <>
     <div className="container-fluid my-4 px-3">
      <div className="flight-form p-4 shadow rounded bg-white">
        <h3 className="mb-4 text-center">Search Flights</h3>
        <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>

          {/* Source */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <label className="form-label">From</label>
            <input
              type="text"
              className="form-control input-custom"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Departure city"
              required
            />
          </div>

          {/* Destination */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <label className="form-label">To</label>
            <input
              type="text"
              className="form-control input-custom"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Destination city"
              required
            />
          </div>

          {/* Departure Date */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <label className="form-label">Departure</label>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              className="form-control input-custom"
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
            />
          </div>

          {/* Return Date */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <label className="form-label">Return</label>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              className="form-control input-custom"
              dateFormat="yyyy-MM-dd"
              minDate={departureDate}
              isClearable
              placeholderText="Optional"
            />
          </div>

          {/* Cabin & Travelers */}
          <div className="col-12 col-md-6 col-lg-2">
            <label className="form-label">Cabin Class</label>
            <select
              className="form-select input-custom"
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value)}
              onClick={handleCabinClassClick}
            >
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business</option>
              <option value="First">First Class</option>
            </select>

            {showTravelers && (
              <div className="travelers-dropdown mt-2 p-3 bg-light rounded border">
                <label className="form-label">Travelers</label>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <span className="me-2">Adults:</span>
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setAdultCount(Math.max(adultCount - 1, 1))}>-</button>
                    <span className="mx-2">{adultCount}</span>
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setAdultCount(adultCount + 1)}>+</button>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="me-2">Children:</span>
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setChildCount(Math.max(childCount - 1, 0))}>-</button>
                    <span className="mx-2">{childCount}</span>
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setChildCount(childCount + 1)}>+</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-12 col-md-6 col-lg-2 d-flex align-items-end">
            <button type="submit" className="btn btn-primary w-100 btnhight">Search Flights</button>
          </div>
        </form>
      </div>
    </div>
    <HomeCard/>
    <FlightDescriptions/>
    <WhyBookUsComponent/>
    <TripIdeasComponent/>
   </>
   
  );
};

export default FlightSearchForm;
