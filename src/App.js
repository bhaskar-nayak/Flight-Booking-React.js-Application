import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FlightSearchForm from './FlightSearch/FlightSearchForm.component';
import Navbar from './Navbar';
import Footer from './Footer';
import FlightsAvailableComponent from './FlightsList/FlightsList.component';
import FlightPayment from './FlightPayment/Flight.Payment';
import FlightBudgetComponent from './Flight Budget/Flight.Budget';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<FlightSearchForm/>}></Route>
      <Route path='flights-available' element={<FlightsAvailableComponent/>}></Route>
      <Route path='flight-budget' element={<FlightBudgetComponent/>}></Route>
      <Route path='payment' element={<FlightPayment/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
