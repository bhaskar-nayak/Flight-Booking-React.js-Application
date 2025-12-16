import React from 'react';
import '../Styles/FlightAvailable.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFlight } from '../Slices/Flight.Slice';

function FlightsAvailableComponent(){
  const { searchParams, flights } = useSelector((state) => state.flight);
  const navigate = useNavigate();
  const dispatch = useDispatch();
    
  const handleSelect = (flight) => {
    // You can choose either budget breakdown or Razorpay directly
   dispatch(setSelectedFlight(flight));
    navigate('/flight-budget');
  }; 
    return(
        <>
     <div className="container mt-4">
      {searchParams && (
        <div className="searched-container mb-4">
          <div className="search-grid">
            <span>{searchParams.source} → {searchParams.destination}</span>
            <span>{searchParams.departureDate}</span>
            {searchParams.returnDate && <span>Return: {searchParams.returnDate}</span>}
            <span>{searchParams.cabinClass}</span>
            <span>Adults: {searchParams.adults}, Children: {searchParams.children}</span>
          </div>
        </div>
      )}

      <div className="row justify-content-center">
        {flights && flights.length > 0 ? (
          flights.map((flight, index) => (
            <div key={index} className="col-12 col-md-8">
              <div className="flight-card mb-4 p-3 shadow-sm">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <img src="https://www.skyscanner.net/images/airlines/small/AI.png" alt="Flight Logo" className="flight-logo" />
                  <div className="flight-info">
                    <h5 className='flight-titles'>{flight.airline}</h5>
                    <p  className='flight-titles'>{flight.source} → {flight.destination}</p>
                    <p  className='flight-titles'>Duration: {(flight.departureTime, flight.arrivalTime)}</p>
                    <p  className='flight-titles'>Cabin: {flight.cabinClass}</p>
                  </div>
                  <div className="text-end">
                    <p className="price">₹{flight.price}</p>
                    <button className="btn btn-primary mt-2" onClick={() => handleSelect(flight)}>Select</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No flights available.</p>
        )}
      </div>
    </div>
        </>
    )
}
export default FlightsAvailableComponent;