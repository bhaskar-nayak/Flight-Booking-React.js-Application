import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/FlightBudget.css';
import FlightCardUiComponent from './Flight.card';
import { useSelector, useDispatch } from 'react-redux';
import { setTotalPrice, setRazorpayLoaded } from '../Slices/Flight.Slice';
function FlightBudgetComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 const { selectedFlight, searchParams } = useSelector((state) => state.flight);

  const handlePayment = () => {
  dispatch(setTotalPrice(totalPrice));
  dispatch(setRazorpayLoaded(true));
    navigate("/payment");
  };

  const totalPassengers = parseInt(searchParams.adults || 0) + parseInt(searchParams.children || 0);
  const totalPrice = selectedFlight.price * totalPassengers;

  return (
       <>
       <div className="container my-5">
        <h4 className='text-center'>Flight Details</h4>
      <div className="budget-card shadow-lg rounded-4 p-4 mx-auto">
        <div className="row align-items-center">
          <div className="col-md-3 text-center">
            <img
              src="https://www.skyscanner.net/images/airlines/small/AI.png" // use static image
              alt="Flight Logo"
              className="flight-logo mb-3"
            />
            <h5 className="flight-name mb-0">{selectedFlight.airline}</h5>
          </div>

          <div className="col-md-6 text-center">
            <h4 className="fw-bold">
              {selectedFlight.source} → {selectedFlight.destination}
            </h4>
            <p className="text-muted mb-1">Departure: {selectedFlight.departureTime}</p>
            <p className="text-muted">Cabin: {selectedFlight.cabinClass}</p>
            <p className="text-muted">Duration: 5hr</p>
          </div>

          <div className="col-md-3 text-center">
            <h4 className="text-success fw-bold">₹{selectedFlight.price}</h4>
            <button onClick={handlePayment} className="btn btn-primary mt-3">
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
    <FlightCardUiComponent/>
       </>
  );
}

export default FlightBudgetComponent;
