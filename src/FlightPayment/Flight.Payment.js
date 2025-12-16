import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import '../Styles/Payment.css';
import axios from "axios";

function FlightPayment() {
  const { totalPrice } = useSelector((state) => state.flight);
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Load Razorpay script on component mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      setRazorpayLoaded(true);
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay SDK.");
    };
    document.body.appendChild(script);
  }, []);

  const createOrderId = async () => {
    if (!razorpayLoaded) {
      console.error("Razorpay SDK not loaded.");
      return;
    }

    setLoading(true);
    try {
      const amount = totalPrice * 100; // Convert to paisa (₹1 = 100)
      const response = await axios.get(`http://localhost:2222/payment/createOrderId/${amount}`);

      if (response.status === 200) {
        const { orderId, amount, currency } = response.data;
        openCheckout(orderId, amount, currency);
      }
    } catch (error) {
      console.error("Error creating order ID:", error);
    } finally {
      setLoading(false);
    }
  };

  const openCheckout = (orderId, amount, currency) => {
    const options = {
  key: 'REACT_APP_RAZORPAY_KEY_ID', // Should be rzp_test_4usidYjXvLXB6h
  amount: amount.toString(),
  currency: currency,
  name: "Digital Lync",
  description: "Flight Booking",
  order_id: orderId,
  handler: function (response) {
    console.log("Payment Success:", response);
  },
  prefill: {
    name: "",
    email: "",
    contact: "",
  },
  theme: { color: "#004A55" },
};

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      console.error("Payment Failed:", response.error);
    });
    rzp.open();
  };

  return (
    <>
     <div className="container">
      <div className="row">
         <h1 className="text-center payment mt-4">Payment</h1>
        <div className="card-payment">
          <h2 className="text-center">Checkout</h2>
        <div className="col-sm text-center">
          <p className="totals-prices">Total Price: ₹{totalPrice}</p>
          <button
            className="btn btn-dark mb-4"
            onClick={createOrderId}
            disabled={!razorpayLoaded || loading}
          >
            {loading ? "Processing..." : "Checkout"}
          </button>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default FlightPayment;
