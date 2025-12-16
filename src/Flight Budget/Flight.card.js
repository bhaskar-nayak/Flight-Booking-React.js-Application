import React from 'react';
import '../Styles/FlightCardUi.css';

function FlightCardUiComponent() {
  const FlightUiObj = [
    {
      id: 1,
      imgurl: "https://i.pinimg.com/736x/da/fd/fd/dafdfd663c7c4076f2624777878d57dd.jpg",
      description1: "Need a place to stay in Hyderabad?",
      description2: "Explore hotels in the best spots in Hyderabad.",
      rooms: "Rooms from",
      price: "₹1200"
    },
    {
      id: 2,
      imgurl: "https://media.istockphoto.com/id/1214396728/vector/red-car-icon-isolated-on-white-background-clip-art-car-red-cute-illustration-car-flat-simple.jpg?s=612x612&w=0&k=20&c=Lh5wvIsb1bXeZhBXXMLoLRsUQnp9ZmKmSBlLM-KTxEQ=",
      description1: "Car hire in Hyderabad",
      description2: "Skip the crowds on public transport and relax on the road",
      rooms: "Cars from",
      price: "₹900"
    },
  ];

  return (
    <>
    <div className="container my-5">
  <h4 className="mb-4 text-center">Complete Your Trip</h4>
  <div className="row justify-content-center">
    {FlightUiObj.map((item, index) => (
      <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
        <div className="card flight-card shadow-sm h-100">
          <img src={item.imgurl} className="card-img-top img-fluid" alt="service" />
          <div className="card-body text-center">
            <h5 className="card-title">{item.description1}</h5>
            <p className="card-text text-muted">{item.description2}</p>
            <p className="card-text fw-bold">
              {item.rooms}: <span className="text-success">{item.price}</span>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
}

export default FlightCardUiComponent;
